import { range } from "lodash"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import {
  getAllPosts,
  getSectionMap,
  getSectionPosts,
} from "../../../lib/api/post"
import markdownHtml from "../../../lib/markdown-html"
import { getPageCount, getPagePosts } from "../../../lib/paginate"
import { getUrlFriendlyTag } from "../../../lib/tags"
import { toCapitalCase } from "../../../lib/text"

interface IProps {
  title: string
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({ title, posts, page, pages }: IProps) {
  return (
    <ContentLayout title={title} superTitle="Section">
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
  const section = toCapitalCase(params.slug[0])

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = await Promise.all(
    getSectionPosts(section, getAuthorMap()).map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
        //html : await markdownHtml(post.frontmatter.content || ''),
      }
    })
  )

  const posts = getPagePosts(allPosts, page)
  const pages = getPageCount(posts)

  return {
    props: { title: section, posts, page, pages },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(getAuthorMap())

  const sectionMap = getSectionMap(posts)

  const paths = []

  Object.keys(sectionMap).forEach(section => {
    const sectionPosts = sectionMap[section]
    const pages = getPageCount(sectionPosts)

    const s = getUrlFriendlyTag(section)
    paths.push({
      params: {
        slug: [s],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [s, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
