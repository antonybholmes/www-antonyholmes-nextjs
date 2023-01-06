import { range } from "lodash"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import {
  getAllPosts,
  getSectionMap,
  getSectionPosts,
  getTagMap,
  getTagPosts,
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
    <ContentLayout title={title} superTitle="Tag">
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
  const tag = toCapitalCase(params.slug[0])

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  console.log(tag)
  const allPosts = await Promise.all(
    getTagPosts(tag, getAuthorMap()).map(async post => {
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
    props: { title: tag, posts, page, pages },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(getAuthorMap())

  const tagMap = getTagMap(posts)

  const paths = []

  Object.keys(tagMap).forEach(tag => {
    const tagPosts = tagMap[tag]
    const pages = getPageCount(tagPosts)

    const t = getUrlFriendlyTag(tag)
    paths.push({
      params: {
        slug: [t],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [t, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
