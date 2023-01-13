import fs from "fs"
import { Feed } from "feed"
import IBasePost from "../interfaces/base-post"
import { SITE_URL } from "../constants"

export default async function generateRssFeed(posts: IBasePost[]) {
  const feedOptions = {
    title: "Antony Holmes | RSS Feed",
    //description: "Welcome to this blog posts!",
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/favicon.png`,
    copyright: `Copyright (C) ${new Date().getFullYear()} Antony Holmes. All rights reserved.`,
    //generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
      json: `${SITE_URL}/rss.json`,
      atom: `${SITE_URL}/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  posts.forEach(post => {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${SITE_URL}/blog/${post.fields.slug}`,
      link: `${SITE_URL}/blog/${post.fields.slug}`,
      //description: post.description,
      date: new Date(post.fields.date),
    })
  })

  fs.writeFileSync("./public/rss.xml", feed.rss2())
  fs.writeFileSync("./public/rss.json", feed.json1())
  fs.writeFileSync("./public/atom.xml", feed.atom1())
}
