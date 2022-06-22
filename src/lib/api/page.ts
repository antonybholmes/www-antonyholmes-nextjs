import fs from 'fs'
import { join } from 'path'
import { getFields } from './markdown'

const pageDir = join(process.cwd(), '_content')

const getAllFiles = (dir = '') => {
  return fs.readdirSync(dir)
}

export const getPagePaths = () => {
  return getAllFiles(pageDir)
}

export const getPageBySlug = (slug: string, fields: string[] = []) => {
  const realPath = slug.replace(/\.md$/, '')
  const fullPath = join(pageDir, `${realPath}.md`)

  return { slug: slug, fields: getFields(fullPath, fields) }
}

export const getAllPages = (fields: string[] = []) => {
  const paths = getPagePaths()
  const pages = paths.map(path => getPageBySlug(path, fields))
  // sort posts by date in descending order
  return pages
}
