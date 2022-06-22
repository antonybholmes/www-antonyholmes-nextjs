const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const Feed = require('feed').Feed

const POSTS_DIR = path.join(process.cwd(), '_content', 'posts', 'published')

SITE_NAME = 'Polite Investor'
SITE_URL = 'https://www.politeinvestor.com'

const getCanonicalPostSlug = path => {
  return path
    .replace(/\.md$/, '')
    .replaceAll('\\', '/')
    .replace(/^.+(published|drafts)\//, '')
    .replace(/^.+\//, '')
}

const getFields = (path, fields = []) => {
  const fileContents = fs.readFileSync(path, 'utf8')
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
    excerpt_separator: '<!-- end -->',
  })

  const items = {}

  items['content'] = content
  items['excerpt'] = excerpt

  for (const [key, value] of Object.entries(data)) {
    items[key] = value
  }

  return items
}

const getAllFiles = (dirPath = '', arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const p = path.join(dirPath, '/', file) //`${dirPath}/${file}`
    if (fs.statSync(p).isDirectory()) {
      getAllFiles(p, arrayOfFiles)
    } else {
      arrayOfFiles.push(p) //path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

const getPostPaths = () => {
  return getAllFiles(POSTS_DIR)
}

const getPostBySlug = (path, fields = []) => {
  const canonicalSlug = getCanonicalPostSlug(path)

  const match = canonicalSlug.match(/(\d{4})-(\d{2})-(\d{2})/)

  const date = match ? match.slice(1, 4).join('-') : '2022-01-01'

  return {
    slug: canonicalSlug,
    url: `/blog/${canonicalSlug}`,
    date: date,
    fields: getFields(path, fields),
  }
}

const getAllPosts = (fields = []) => {
  const paths = getPostPaths()
  const posts = paths
    .map(path => getPostBySlug(path, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (post1.date > post2.date) {
        return -1
      } else if (post1.date < post2.date) {
        return 1
      } else {
        // dates equal so compare names
        return post1.fields.title.localeCompare(post2.fields.title)
      }
    })
    .map((post, index) => {
      return {
        ...post,
        index,
      }
    })

  return posts
}

const generateSiteMap = (headerLinks, resourceLinks, posts) => {
  console.log('Creating sitemap...')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_URL}</loc>
    </url>

    ${headerLinks
      .map(link => {
        return `
      <url>
        <loc>${`${SITE_URL}${link.url}`}</loc>
      </url>`
      })
      .join('')}

    ${resourceLinks
      .map(link => {
        return `
      <url>
        <loc>${`${SITE_URL}${link.url}`}</loc>
      </url>`
      })
      .join('')}

    ${posts
      .map(post => {
        return `
      <url>
          <loc>${`${SITE_URL}${post.url}`}</loc>
          <lastmod>${post.date}</lastmod>
      </url>`
      })
      .join('')}
   </urlset>
 `.replace(',', '')

  //const path = `${process.cwd()}/public/sitemap.xml`;
  //fs.writeFileSync(path, sitemap, "utf8");

  fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf8')

  console.log('Finished.')

  return sitemap
}

const generateRSS = posts => {
  console.log('Creating RSS...')

  const date = new Date()

  const feed = new Feed({
    title: SITE_NAME,
    description: '',
    id: SITE_URL,
    link: SITE_URL,
    favicon: `${SITE_URL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${SITE_NAME}`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
      json: `${SITE_URL}/feed.json`,
      atom: `${SITE_URL}/atom.xml`,
    },
  })

  posts.forEach(post => {
    // title, description, and date are properties of my front matter
    // attributes. Yours might be different depending on your data structure
    feed.addItem({
      title: post.fields.title,
      id: `${SITE_URL}${post.url}`,
      link: `${SITE_URL}${post.url}`,
      description: post.fields.description,
      date: new Date(post.date),
    })
  })

  //fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/feed.xml', feed.rss2())
  fs.writeFileSync('./public/atom.xml', feed.atom1())
  fs.writeFileSync('./public/feed.json', feed.json1())

  console.log('Finished.')

  return feed
}

// parse JSON string to JSON object
const headerLinks = JSON.parse(
  fs.readFileSync('./_content/menus/header.json', 'utf8')
)
const resourceLinks = JSON.parse(
  fs.readFileSync('./_content/menus/reviews.json', 'utf8')
)

const posts = getAllPosts()
generateSiteMap(headerLinks, resourceLinks, posts)
generateRSS(posts)
