import { join } from "path"
import IBasePage from "../../interfaces/base-page"
import { getCanonicalSlug } from "../slug"
import { getAllFiles } from "./files"
import { getFields, getPageFrontmatter } from "./markdown"

const PAGE_DIR = join(process.cwd(), "_content", "pages")

export const getPagePaths = () => {
  return getAllFiles(PAGE_DIR)
}

export const getPageBySlug = (slug: string): IBasePage => {
  slug = getCanonicalSlug(slug)
  const path = join(PAGE_DIR, `${slug}.md`)

  return {
    fields: getFields(-1, slug),
    frontmatter: getPageFrontmatter(path),
  }
}

export const getAllPages = () => {
  const paths = getPagePaths()
  const pages = paths.map(path => getPageBySlug(path))
  // sort posts by date in descending order
  return pages
}
