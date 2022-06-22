import fs from 'fs'
import path, { join } from 'path'
import { getCanonicalAuthorSlug } from '../slug'
import { getFields } from './markdown'

const authorsDir = join(process.cwd(), '_content', 'authors')

const getAllFiles = (dirPath = '', arrayOfFiles: string[] = []) => {
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

export const getAuthorPaths = () => {
  return getAllFiles(authorsDir)
}

export const getAuthorBySlug = (slug: string, fields: string[] = []) => {
  slug = getCanonicalAuthorSlug(slug)
  const realPath = slug.replace(/\.md$/, '')
  const fullPath = join(authorsDir, `${realPath}.md`)

  return { slug: slug, fields: getFields(fullPath, fields) }
}

export const getAllAuthors = (fields: string[] = []) => {
  const paths = getAuthorPaths()
  const authors = paths.map(path => getAuthorBySlug(path, fields))
  return authors
}

export const getAuthorMap = (fields: string[] = []) => {
  return Object.fromEntries(getAllAuthors(fields).map(x => [x.fields.name, x]))
}
