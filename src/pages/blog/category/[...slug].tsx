import { range } from "lodash"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import {
  getAllPostsAndReviews,
  getCategoryPostMap,
} from "../../../lib/api/post"
import markdownHtml from "../../../lib/markdown-html"
import { getPageCount, getPagePosts } from "../../../lib/paginate"
import { toCapitalCase } from "../../../lib/text"

interface IProps {
  title: string
  superTitle: string
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({
  title,
  superTitle,
  posts,
  page,
  pages,
}: IProps) {
  return (
    <ContentLayout title={title} superTitle={superTitle}>
      <></>
      <PostsPage posts={posts} page={page} pages={pages} />
      <></>
    </ContentLayout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const category = params.slug[0]

  const section =
    params.slug.length > 2 && params.slug[1] === "section"
      ? params.slug[2]
      : "all"

  const page =
    params.slug.length > 1 && params.slug[params.slug.length - 2] === "page"
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = getAllPostsAndReviews(getAuthorMap())

  const categoryMap = getCategoryPostMap(allPosts)

  const catPosts = await Promise.all(
    categoryMap[category][section].map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
        //html : await markdownHtml(post.frontmatter.content || ''),
      }
    })
  )

  const pagePosts = getPagePosts(catPosts, page)
  const pages = getPageCount(catPosts)

  return {
    props: {
      title:
        section === "all" ? toCapitalCase(category) : toCapitalCase(section),
      superTitle: section !== "all" ? "Category" : "Section",
      posts: pagePosts,
      page,
      pages,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPostsAndReviews(getAuthorMap())

  const categoryMap = getCategoryPostMap(posts)

  const paths = []

  Object.keys(categoryMap).forEach(category => {
    const categoryPosts = categoryMap[category]["all"]
    const pages = getPageCount(categoryPosts)

    paths.push({
      params: {
        slug: [category],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [category, "page", (page + 1).toString()],
        },
      })
    })

    Object.keys(categoryMap[category]).forEach(section => {
      if (section !== "all") {
        paths.push({
          params: {
            slug: [category, "section", section],
          },
        })

        range(0, pages).forEach(page => {
          paths.push({
            params: {
              slug: [
                category,
                "section",
                section,
                "page",
                (page + 1).toString(),
              ],
            },
          })
        })
      }
    })
  })

  return {
    paths,
    fallback: false,
  }
}
