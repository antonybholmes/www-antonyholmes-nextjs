import { range } from "lodash"
import PostsPage from "../../../components/pages/posts-page"
import IPost from "../../../interfaces/post"
import ContentLayout from "../../../layouts/content-layout"
import { getAuthorMap } from "../../../lib/api/author"
import { getAllPostsAndReviews } from "../../../lib/api/post"
import markdownHtml from "../../../lib/markdown-html"
import { getPageCount, getPagePosts } from "../../../lib/paginate"

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

  const allPosts = await Promise.all(
    getAllPostsAndReviews(getAuthorMap()).map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
        //html : await markdownHtml(post.frontmatter.content || ''),
      }
    })
  )

  const posts = getPagePosts(allPosts, page)
  const pages = getPageCount(allPosts)

  return {
    props: { posts, page, pages },
  }
}

export async function getStaticPaths() {
  const posts = getAllPostsAndReviews(getAuthorMap())

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
