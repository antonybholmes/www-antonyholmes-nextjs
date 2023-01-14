import { join } from "path"
import IAuthor from "../../interfaces/author"
import IAuthorMap from "../../interfaces/author-map"
import IPostAuthor from "../../interfaces/post-author"
import markdownHtml from "../markdown-html"
import { getCanonicalSlug } from "../slug"
import { getUrlFriendlyTag } from "../tags"
import { getAllFiles } from "./files"
import { getAuthorFrontmatter } from "./markdown"

const PEOPLE_DIR = join(process.cwd(), "_content", "people")

export const getAuthorPaths = () => {
  return getAllFiles(PEOPLE_DIR)
}

export const getAuthorBySlug = (slug: string): IPostAuthor => {
  slug = getCanonicalSlug(slug)
  const fullPath = join(PEOPLE_DIR, `${slug}.md`)

  return { slug: slug, frontmatter: getAuthorFrontmatter(fullPath) }
}

export const getAllAuthors = (): IPostAuthor[] => {
  const paths = getAuthorPaths()
  const authors = paths.map(path => getAuthorBySlug(path))
  return authors
}

export const getAuthorMap = (authors: IPostAuthor[] = []): IAuthorMap => {
  if (!authors || authors.length === 0) {
    authors = getAllAuthors()
  }

  return Object.fromEntries(
    authors.map(x => [getUrlFriendlyTag(x.frontmatter.name), x])
  )
}

export async function addAuthorHtml(author: IPostAuthor): Promise<IAuthor> {
  return {
    ...author,
    html: await markdownHtml(author.frontmatter.rawContent || ""),
  }
}

export function addHtmlToAuthors(authors: IPostAuthor[]): Promise<IAuthor>[] {
  return authors.map(author => addAuthorHtml(author))
}
