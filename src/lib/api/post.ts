import { join } from "path"
import IAuthorMap from "../../interfaces/author-map"
import IAuthorPost from "../../interfaces/author-post"
import IBasePost from "../../interfaces/base-post"
import ICategory from "../../interfaces/category"
import IFieldMap from "../../interfaces/field-map"
import IPostAuthor from "../../interfaces/post-author"
import IStringMap from "../../interfaces/string-map"
import { getCanonicalPostSlug } from "../slug"
import { getUrlFriendlyTag } from "../tags"
import { getAllMDFiles } from "./files"
import { getPostFields } from "./markdown"
import TagMap from "./tag-map"

export const POSTS_DIR = join(process.cwd(), "_content", "posts")

export function getPostPaths(): string[] {
  return getAllMDFiles(POSTS_DIR)
}

export function findPostBySlug(slug: string): string {
  return getPostPaths().filter(path => path.includes(slug))[0]
}

export function getPostPathMap(): IStringMap {
  const ret: IStringMap = {}

  getPostPaths().forEach(path => {
    ret[getCanonicalPostSlug(path)] = path
  })

  return ret
}

export function getPostByPath(path: string): IBasePost {
  const canonicalSlug = getCanonicalPostSlug(path)

  // const fullPath = join(
  //   isPublished ? POSTS_DIR : DRAFTS_DIR,
  //   `${slug}.md`
  // )

  const match = canonicalSlug.match(/(\d{4})-(\d{2})-(\d{2})/)

  const date = match ? match.slice(1, 4).join("-") : "2022-01-01"

  const post: IBasePost = {
    index: -1,
    path,
    fields: { slug: canonicalSlug, date: date },
    frontmatter: getPostFields(path),
    categories: [],
  }

  // Convert categories to something more useful
  post.categories = post.frontmatter.categories.map(c => parseCategory(c))

  // If user doesn't specify a hero, use a default
  if (post.frontmatter.hero === "") {
    post.frontmatter.hero = "generic1"
  }

  return post
}

export function getPostBySlug(
  slug: string,
  postPathMap: IStringMap
): IBasePost {
  const path = postPathMap[slug]

  return getPostByPath(path)
}

export function addAuthors(
  post: IBasePost,
  authorMap: IAuthorMap
): IAuthorPost {
  return {
    ...post,
    authors: post.frontmatter.authors.map(a => authorMap[a]),
  }
}

export function sortPosts(
  posts: IBasePost[],
  authorMap: IAuthorMap
): IAuthorPost[] {
  return (
    posts
      .filter(post => {
        return (
          process.env.NODE_ENV === "development" ||
          post.frontmatter.status === "published"
        )
      })
      // sort posts by date in descending order
      .sort((post1, post2) => {
        const d1 = new Date(post1.fields.date)
        const d2 = new Date(post2.fields.date)
        if (d1 > d2) {
          return -1
        } else if (d1 < d2) {
          return 1
        } else {
          // dates equal so compare names
          return post1.frontmatter.title.localeCompare(post2.frontmatter.title)
        }
      })
      .map((post, index) => {
        return {
          ...post,
          index,
        }
      })
      .map(post => {
        return addAuthors(post, authorMap)
      })
  )
}

export function getAllPosts(authorMap: IAuthorMap): IAuthorPost[] {
  return sortPosts(
    getPostPaths().map(path => getPostByPath(path)),
    authorMap
  )
}

export function parseCategory(category: string): ICategory {
  const sections = category.split("/")

  return {
    name: sections[0],
    section: sections.length > 1 ? sections[1] : "Default",
  }
}

export function getCategoryPosts(
  category: string,
  authorMap: IAuthorMap
): IAuthorPost[] {
  category = getUrlFriendlyTag(category)

  return sortPosts(
    getPostPaths()
      .map(path => getPostByPath(path))
      .filter(post => {
        return post.frontmatter.categories
          .mapgetUrlFriendlyTag(post.frontmatter.categories)
          .includes(category)
      }),
    authorMap
  )
}

export function getTagPosts(tag: string, authorMap: IAuthorMap): IAuthorPost[] {
  tag = getUrlFriendlyTag(tag)

  return sortPosts(
    getPostPaths()
      .map(path => getPostByPath(path))
      .filter(post => {
        return post.frontmatter.tags
          .map(t => getUrlFriendlyTag(t))
          .includes(tag)
      }),
    authorMap
  )
}

export function getAuthorPosts(
  author: string,
  authorMap: IAuthorMap
): IAuthorPost[] {
  return sortPosts(
    getPostPaths()
      .map(path => getPostByPath(path))
      .filter(post => {
        return post.frontmatter.authors.includes(author)
      }),
    authorMap
  )
}

export function allPostsBySlugMap(
  posts: { slug: string; fields: IFieldMap }[]
) {
  let ret: any = {}

  posts.forEach(post => {
    ret[post.fields.slug] = post
  })

  return ret
}

export function getSectionMap(posts: IBasePost[], max: number = -1): IFieldMap {
  const sectionMap: IFieldMap = {}

  posts.forEach(post => {
    const s = getUrlFriendlyTag(post.frontmatter.categories)

    if (!(s in sectionMap)) {
      sectionMap[s] = []
    }

    if (max === -1 || sectionMap[s].length < max) {
      sectionMap[s].push(post)
    }
  })

  return sectionMap
}

/**
 * Regroups posts by tag.
 *
 * @param posts A list of posts to sort
 * @param max optionally specify the max number of items in each tag group.
 *
 * @returns a map of tags -> posts
 */
export function getTagMap(posts: IBasePost[], max: number = -1): TagMap {
  const tagMap = new TagMap(posts, max)

  posts.forEach(post => {
    post.frontmatter.tags.forEach((tag: string) => {
      // Add the tag as is
      // if (!(tag in tagMap)) {
      //   tagMap[tag] = []
      // }

      // if (max === -1 || tagMap[tag].length < max) {
      //   tagMap[tag].push(post)
      // }

      // add a url friendly version to make it easier
      // to find tags
      const t = getUrlFriendlyTag(tag)

      if (!(t in tagMap)) {
        tagMap[t] = []
      }

      if (max === -1 || tagMap[t].length < max) {
        tagMap[t].push(post)
      }
    })
  })

  return tagMap
}

export function getAuthorPostMap(
  posts: IBasePost[],
  max: number = -1
): IFieldMap {
  const authurMap: IFieldMap = {}

  posts.forEach(post => {
    post.frontmatter.authors.forEach((author: string) => {
      if (!(author in authurMap)) {
        authurMap[author] = []
      }

      if (max === -1 || authurMap[author].length < max) {
        authurMap[author].push(post)
      }
    })
  })

  return authurMap
}
