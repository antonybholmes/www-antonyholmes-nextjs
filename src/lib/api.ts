import fs from "fs-extra"
import { join } from "path"
import { getCanonicalSlug } from "./slug"

export const CONTENT_DIR = join(process.cwd(), "_content")
export const POSTS_DIR = join(CONTENT_DIR, "posts")
export const PEOPLE_DIR = join(CONTENT_DIR, "people")
export const NEWS_DIR = join(CONTENT_DIR, "news")
export const JOBS_DIR = join(CONTENT_DIR, "jobs")
export const PUBLICATIONS_DIR = join(CONTENT_DIR, "publications")

export function getAllFiles(dir: string, ret: string[] = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file: string) => {
    const path = join(dir, file) //`${dirPath}/${file}`
    if (fs.statSync(path).isDirectory()) {
      getAllFiles(path, ret)
    } else {
      ret.push(path) //path.join(dirPath, "/", file))
    }
  })

  return ret
}

export function getSelectedPublications(slug: string) {
  slug = getCanonicalSlug(slug)
  const file = join(PUBLICATIONS_DIR, `${slug}.json`)

  let allPublications = []

  if (fs.existsSync(file)) {
    allPublications = fs.readJsonSync(file)
  }

  return allPublications
}
