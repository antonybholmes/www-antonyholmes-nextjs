import { range } from "lodash"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  getTagPostMap,
  sortPosts,
} from "../../../lib/api/post"
import markdownHtml from "../../../lib/markdown-html"
import { getPageCount, getPageItems } from "../../../lib/paginate"
import { getUrlFriendlyTag } from "../../../lib/tags"
import { fixName, toCapitalCase } from "../../../lib/text"

const TAG_REPLACE_MAP = { Svg: "SVG" }

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
  const tag = params.slug[0]

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = sortPosts(
    getAllPosts().filter(post =>
      post.frontmatter.tags.map(tag => getUrlFriendlyTag(tag)).includes(tag)
    )
  )
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, page))),
    getAuthorMap()
  )

  return {
    props: { title: fixName(toCapitalCase(tag)), posts, page, pages },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  const tagMap = getTagPostMap(posts)

  const paths = []

  Object.keys(tagMap).forEach((tag: string) => {
    const tagPosts = tagMap[tag]
    const pages = getPageCount(tagPosts)

    paths.push({
      params: {
        slug: [tag],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [tag, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
