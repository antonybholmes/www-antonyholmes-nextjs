import { range } from "lodash"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  getPostPaths,
  sortPosts,
} from "../../../lib/api/post"
import { getPageCount, getPageItems } from "../../../lib/paginate"

interface IProps {
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({ posts, page, pages }: IProps) {
  return (
    <ContentLayout title="Blog" showTitle={false}>
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
  const page = parseInt(params.slug) - 1

  const allPosts = sortPosts(getAllPosts())
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, page))),
    getAuthorMap()
  )

  return {
    props: { posts, page, pages },
  }
}

export async function getStaticPaths() {
  const posts = getPostPaths()

  const pages = getPageCount(posts)

  return {
    paths: range(0, pages).map((page: number) => {
      return {
        params: {
          slug: (page + 1).toString(),
        },
      }
    }),
    fallback: false,
  }
}
