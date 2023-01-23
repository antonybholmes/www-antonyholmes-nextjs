import { Feed } from "feed"
import fs from "fs"
import matter from "gray-matter"
import path from "path"

function getDate(slug) {
  const match = slug.match(/(\d{4})-(\d{2})-(\d{2})/)

  return match ? match.slice(1, 4).join("-") : "2022-01-01"
}

const config = JSON.parse(fs.readFileSync("./config.json"))

const POSTS_DIR = path.join(process.cwd(), "_content", "posts")

console.log('Creating RSS feed...')

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter(filePath => filePath !== ".DS_Store") // only needed for macOS
  .map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_DIR, filePath))
    const { content, data } = matter(source)

    return {
      content,
      frontmatter:data,
      slug:filePath,
    }
  })
  .map(post => {
    return {
      ...post,
      date: getDate(post.slug),
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const feedOptions = {
  title: "Antony Holmes | RSS Feed",
  //description: "Welcome to this blog posts!",
  id: config.SITE_URL,
  link: config.SITE_URL,
  //image: `${ENV.SITE_URL}/logo.png`,
  //favicon: `${ENV.SITE_URL}/favicon.png`,
  copyright: `Copyright (C) ${new Date().getFullYear()} Antony Holmes. All rights reserved.`,
  //generator: "Feed for Node.js",
  feedLinks: {
    rss2: `${config.SITE_URL}/rss.xml`,
    json: `${config.SITE_URL}/rss.json`,
    atom: `${config.SITE_URL}/atom.xml`,
  },
}

const feed = new Feed(feedOptions)

posts.forEach(post => {
  feed.addItem({
    title: post.frontmatter.title,
    id: `${config.SITE_URL}/blog/${post.slug}`,
    link: `${config.SITE_URL}/blog/${post.slug}`,
    //description: post.description,
    date: new Date(post.date),
  })
})

fs.writeFileSync("./public/rss.xml", feed.rss2())
fs.writeFileSync("./public/rss.json", feed.json1())
fs.writeFileSync("./public/atom.xml", feed.atom1())

console.log('Finished.')
