import fs from 'fs'
import path, { join } from 'path'
import IFieldMap from '../../types/field-map'
import { GENERIC_COVER_IMAGES } from '../../constants'
import { getCanonicalPostSlug } from '../slug'
import { getFields } from './markdown'
import ISectionMap from '../../types/section-map'

export const POSTS_DIR = join(process.cwd(), '_content', 'posts', 'published')
export const DRAFTS_DIR = join(process.cwd(), '_content', 'posts', 'drafts')

export const getAllFiles = (dirPath = '', arrayOfFiles: string[] = []) => {
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

export const getPostPaths = () => {
  return getAllFiles(POSTS_DIR)
}

export const getPostBySlug = (
  path: string,
  fields: string[] = [],
  index: number,
  isPublished: boolean
) => {
  const canonicalSlug = getCanonicalPostSlug(path)

  // const fullPath = join(
  //   isPublished ? POSTS_DIR : DRAFTS_DIR,
  //   `${slug}.md`
  // )

  const match = canonicalSlug.match(/(\d{4})-(\d{2})-(\d{2})/)

  const date = match ? match.slice(1, 4).join('-') : '2022-01-01'

  const post = {
    slug: canonicalSlug,
    url: isPublished
      ? `/blog/${canonicalSlug}`
      : `/blog/drafts/${canonicalSlug}`,
    date: date,
    fields: getFields(path, fields),
  }

  if (post.fields.hero === '') {
    post.fields.hero = GENERIC_COVER_IMAGES[index % GENERIC_COVER_IMAGES.length]
  }

  return post
}

export const getAllPosts = (fields: string[] = []) => {
  const paths = getPostPaths()
  const posts = paths
    .map((path, index) => getPostBySlug(path, fields, index, true))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      const d1 = new Date(post1.date)
      const d2 = new Date(post2.date)
      if (d1 > d2) {
        return -1
      } else if (d1 < d2) {
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

export const allPostsBySlugMap = (
  posts: { slug: string; fields: IFieldMap }[]
) => {
  let ret: any = {}

  posts.forEach(post => {
    ret[post.slug] = post
  })

  return ret
}

export const getDraftPaths = () => {
  return getAllFiles(DRAFTS_DIR)
}

export const getAllDrafts = (fields: string[] = []) => {
  const paths = getDraftPaths()
  const posts = paths
    .map((path, index) => getPostBySlug(path, fields, index, false))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      const d1 = new Date(post1.date)
      const d2 = new Date(post2.date)
      if (d1 > d2) {
        return -1
      } else if (d1 < d2) {
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

export const getSectionMap = (posts: any[]): ISectionMap => {
  const sectionMap: ISectionMap = {}

  posts.forEach(post => {
    if (!(post.fields.section in sectionMap)) {
      sectionMap[post.fields.section] = []
    }

    sectionMap[post.fields.section].push(post)
  })

  return sectionMap
}
