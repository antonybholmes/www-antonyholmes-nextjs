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
  sortPosts,
} from "../../../lib/api/post"
import createCrumbs from "../../../lib/create-crumbs"
import { getPageCount, getPageItems } from "../../../lib/paginate"

interface IProps {
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({ posts, page, pages }: IProps) {
  return (
    <ContentLayout
      title="Blog"
      showTitle={false}
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
  const posts = getAllPosts() //getPostPaths()

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
