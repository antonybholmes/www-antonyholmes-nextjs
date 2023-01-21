import { range } from "lodash"
import { useRouter } from "next/router"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  getCategoryPostMap,
  sortPosts,
} from "../../../lib/api/post"
import createCrumbs from "../../../lib/create-crumbs"
import { getPageCount, getPageItems } from "../../../lib/paginate"
import { getUrlFriendlyTag } from "../../../lib/tags"
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
    <ContentLayout
      title={title}
      superTitle={superTitle}
      crumbs={createCrumbs(useRouter().asPath)}
    >
      <></>
      <PostsPage posts={posts} page={page} pages={pages} />
      <></>
    </ContentLayout>
  )
}

interface Props {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Props) {
  const category = params.slug[0]

  const section =
    params.slug.length > 2 && params.slug[1] === "section"
      ? params.slug[2]
      : "all"

  const page =
    params.slug.length > 1 && params.slug[params.slug.length - 2] === "page"
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = sortPosts(
    getAllPosts().filter(post => {
      const categories = post.frontmatter.categories.map(category =>
        getUrlFriendlyTag(category)
      )

      if (section === "all") {
        // Only look for the category
        return categories.filter(c => c.includes(category)).length > 0
      } else {
        return (
          categories.filter(c => c.includes(category) && c.includes(section))
            .length > 0
        )
      }
    })
  )
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, page))),
    getAuthorMap()
  )

  // const allPosts = getAllPosts(getAuthorMap())

  // const categoryMap = getCategoryPostMap(allPosts)

  // const catPosts = await Promise.all(
  //   categoryMap[category][section].map(async post => {
  //     return {
  //       ...post,
  //       excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
  //       //html : await markdownHtml(post.frontmatter.content || ''),
  //     }
  //   })
  // )

  // const pagePosts = getPageItems(catPosts, page)
  // const pages = getPageCount(catPosts)

  return {
    props: {
      title:
        section === "all" ? toCapitalCase(category) : toCapitalCase(section),
      superTitle: section !== "all" ? "Category" : "Section",
      posts,
      page,
      pages,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

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
