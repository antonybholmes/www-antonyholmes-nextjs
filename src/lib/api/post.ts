import { join } from "path"
import IAuthorMap from "../../interfaces/author-map"
import IAuthorPost from "../../interfaces/author-post"
import IBasePost from "../../interfaces/base-post"
import IFieldMap from "../../interfaces/field-map"
import IPost from "../../interfaces/post"
import IPostAuthor from "../../interfaces/post-author"
import IPreviewPost from "../../interfaces/preview-post"
import markdownHtml from "../markdown-html"
import { getUrlFriendlyTag } from "../tags"
import { getAllMDFiles } from "./files"
import { getFields, getPostFrontmatter } from "./markdown"

export const POSTS_DIR = join(process.cwd(), "_content", "posts")
export const REVIEWS_DIR = join(process.cwd(), "_content", "reviews")

export function getPostPaths() {
  return getAllMDFiles(POSTS_DIR)
}

export function getReviewPaths() {
  return getAllMDFiles(REVIEWS_DIR)
}

export function getAuthors(
  post: IBasePost,
  authorMap: IAuthorMap
): IPostAuthor[] {
  return post.frontmatter.authors.map(a => authorMap[getUrlFriendlyTag(a)])
}

export function addAuthors(
  post: IPreviewPost,
  authorMap: IAuthorMap
): IAuthorPost {
  return {
    ...post,
    authors: getAuthors(post, authorMap),
  }
}

export function addAuthorsToPosts(
  posts: IPreviewPost[],
  authorMap: IAuthorMap
): IAuthorPost[] {
  return posts.map(post => addAuthors(post, authorMap))
}

/**
 * Turns a slug into a file path and uses that to read
 * the post data.
 *
 * @param slug a post slug
 * @returns a post with basic frontmatter loaded.
 */
export function getPostBySlug(slug: string): IBasePost {
  return getPostByPath(join(POSTS_DIR, `${slug}.md`))
}

export function getPostByPath(path: string, index: number = -1): IBasePost {
  // const fullPath = join(
  //   isPublished ? POSTS_DIR : DRAFTS_DIR,
  //   `${slug}.md`
  // )

  const post = {
    fields: getFields(index, path),
    frontmatter: getPostFrontmatter(path),
  }

  // if (post.frontmatter.hero === "") {
  //   post.frontmatter.hero = `generic${(index % GENERIC_IMAGES) + 1}`
  // }

  return post
}

export function sortPosts(posts: IBasePost[]): IBasePost[] {
  return (
    posts
      // .filter(post => {
      //   return (
      //     process.env.NODE_ENV === "development" ||
      //     post.frontmatter.status === "published"
      //   )
      // })
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
          fields: { ...post.fields, index },
        }
      })
  )
}

// export function getAllPosts(authorMap: IAuthorMap): IAuthorPost[] {
//   return sortPosts(
//     getPostPaths().map(path => getPostByPath(path)),
//     authorMap
//   )
// }

// export function getAllPosts(authorMap: IAuthorMap): IAuthorPost[] {
//   return sortPosts(
//     getPostPaths()
//       .map(path => getPostByPath(path))
//       .concat(getReviewPaths().map(path => getReviewByPath(path))),
//     authorMap
//   )
// }

export async function addHtml(post: IAuthorPost): Promise<IPost> {
  return {
    ...post,
    html: await markdownHtml(post.frontmatter.rawContent || ""),
  }
}

export async function addExcerpt(post: IBasePost): Promise<IPreviewPost> {
  return {
    ...post,
    excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
  }
}

export function addExcerpts(posts: IBasePost[]): Promise<IPreviewPost>[] {
  return posts.map(post => addExcerpt(post))
}

export function getAllPosts(): IBasePost[] {
  return getPostPaths()
    .map(path => getPostByPath(path))
    .filter(
      post =>
        post.frontmatter.status === "published" ||
        process.env.NODE_ENV === "development"
    )
}

export function getAllReviews(): IBasePost[] {
  return getAllPosts().filter(post => post.frontmatter.type === "review") //getReviewPaths().map(path => getPostByPath(path, "review"))
}

// export function getAllPostsAndReviews(): IBasePost[] {
//   return getAllPosts().concat(getAllReviews())
// }

export const allPostsBySlugMap = (
  posts: { slug: string; fields: IFieldMap }[]
) => {
  let ret: any = {}

  posts.forEach(post => {
    ret[post.fields.slug] = post
  })

  return ret
}

export function getCategories(post: IBasePost) {
  const ret: IFieldMap = []

  post.frontmatter.categories.forEach(category => {
    let path = category.split("/").concat(["All"])

    let pathMap: any = {}
    ret.push(pathMap)

    pathMap[path[0]] = {}
    pathMap[path[0]]["All"] = {}

    path.forEach(p => {
      if (!(p in pathMap)) {
        pathMap[p] = {}
      }

      pathMap = pathMap[p]
    })
  })

  return ret
}

export function getCategoryPostMap(
  posts: IBasePost[],
  max: number = -1
): IFieldMap {
  const categoryMap: IFieldMap = {}

  posts.forEach(post => {
    post.frontmatter.categories.forEach((category: string) => {
      const path = category.split("/")
      const c = getUrlFriendlyTag(path[0])
      const s = path.length > 1 ? getUrlFriendlyTag(path[1]) : "all"

      if (!(c in categoryMap)) {
        categoryMap[c] = {}
      }

      if (!(s in categoryMap[c])) {
        categoryMap[c][s] = []
      }

      if (!("all" in categoryMap[c])) {
        categoryMap[c]["all"] = []
      }

      if (max === -1 || categoryMap[c][s].length < max) {
        categoryMap[c][s].push(post)
      }

      if (s !== "all") {
        // every post is added to all by default
        if (max === -1 || categoryMap[c]["all"].length < max) {
          categoryMap[c]["all"].push(post)
        }
      }
    })
  })

  return categoryMap
}

export function getTagPostMap(posts: IBasePost[], max: number = -1): IFieldMap {
  const tagMap: IFieldMap = {}

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
  const tagMap: IFieldMap = {}

  posts.forEach(post => {
    post.frontmatter.authors.forEach((author: string) => {
      const a = getUrlFriendlyTag(author)

      if (!(a in tagMap)) {
        tagMap[a] = []
      }

      if (max === -1 || tagMap[a].length < max) {
        tagMap[a].push(post)
      }
    })
  })

  return tagMap
}
