import { range } from "lodash"
import AuthorPage from "../../components/pages/author-page"
import IAuthor from "../../interfaces/author"
import IPost from "../../interfaces/post"
import ContentLayout from "../../layouts/content-layout"
import { getAuthorMap } from "../../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  getAuthorPostMap,
  sortPosts,
} from "../../lib/api/post"
import { getPageCount, getPageItems } from "../../lib/paginate"

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
  const id = params.slug[0]

  const authorMap = getAuthorMap()

  const author = authorMap[id]

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = sortPosts(
    getAllPosts().filter(post =>
      post.frontmatter.authors.includes(author.frontmatter.name)
    )
  )

  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, page))),
    getAuthorMap()
  )

  return {
    props: { author, posts, page, pages },
  }
}

export async function getStaticPaths() {
  const authorMap = getAuthorMap()

  const posts = getAllPosts()

  const postMap = getAuthorPostMap(posts)

  const paths = []

  Object.keys(authorMap).forEach(author => {
    const authorPosts = postMap[author]
    const pages = getPageCount(authorPosts)

    paths.push({
      params: {
        slug: [author],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [author, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
