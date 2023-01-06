import { range } from "lodash"
import AuthorPage from "../../components/pages/author-page"
import IAuthor from "../../interfaces/author"
import IPost from "../../interfaces/post"
import ContentLayout from "../../layouts/content-layout"
import { getAuthorMap } from "../../lib/api/author"
import {
  getAllPosts,
  getTagMap,
  getAuthorPosts,
  getAuthorPostMap,
} from "../../lib/api/post"
import markdownHtml from "../../lib/markdown-html"
import { getPageCount, getPagePosts } from "../../lib/paginate"
import { getUrlFriendlyTag } from "../../lib/tags"
import { toCapitalCase } from "../../lib/text"

interface IProps {
  author: IAuthor
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({ author, posts, page, pages }: IProps) {
  return (
    <ContentLayout title={author.frontmatter.name}>
      <></>
      <AuthorPage author={author} posts={posts} page={page} pages={pages} />
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
  const name = toCapitalCase(params.slug[0])

  console.log(name, params.slug)

  const authorMap = getAuthorMap()

  const author = authorMap[name]

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = await Promise.all(
    getAuthorPosts(name, getAuthorMap()).map(async post => {
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
    props: { author, posts, page, pages },
  }
}

export async function getStaticPaths() {
  const authorMap = getAuthorMap()

  const posts = getAllPosts(authorMap)

  const postMap = getAuthorPostMap(posts)

  getAuthorMap

  const paths = []

  Object.keys(authorMap).forEach(author => {
    const authorPosts = postMap[author]
    const pages = getPageCount(authorPosts)

    const a = getUrlFriendlyTag(author)
    paths.push({
      params: {
        slug: [a],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [a, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
