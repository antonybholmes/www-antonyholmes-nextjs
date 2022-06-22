const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { exit } = require('process')

const POSTS_DIR = path.join(
  process.cwd(),
  '_content',
  'articles',
  'posts',
  'published'
)

const getCanonicalPostSlug = path => {
  return path
    .replace(/\.md$/, '')
    .replaceAll('\\', '/')
    .replace(/^.+(published|drafts)\//, '')
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

const getPostBySlug = (slug, fields = []) => {
  const canonicalSlug = getCanonicalPostSlug(slug)

  const fullPath = path.join(POSTS_DIR, `${canonicalSlug}.md`)

  const match = canonicalSlug.match(/(\d{4})\/(\d{2})\/(\d{2})/)

  const date = match ? match.slice(1, 4).join('-') : '2022-01-01'

  return {
    slug: canonicalSlug,
    url: `/blog/${canonicalSlug}`,
    date: date,
    fields: getFields(fullPath, fields),
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

const transformPostsToSearchObjects = posts => {
  const transformed = posts.map((post, index) => {
    return {
      objectID: index,
      title: post.fields.title,
      excerpt: post.fields.excerpt,
      slug: post.url,
      date: post.date,
      readtime: post.fields.readtime,
    }
  })

  return transformed
}

;(async function () {
  dotenv.config()

  try {
    // fetch your data
    const posts = getAllPosts()

    const transformed = transformPostsToSearchObjects(posts)
    console.log(transformed)

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    )

    // initialize the index with your index name
    const index = client.initIndex('politeinvestor')

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed)

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        '\n'
      )}`
    )
  } catch (error) {
    console.log(error)
  }
})()
