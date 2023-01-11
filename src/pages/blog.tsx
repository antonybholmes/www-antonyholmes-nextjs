import IPost from "../interfaces/post"
import { getAuthorMap } from "../lib/api/author"
import markdownHtml from "../lib/markdown-html"
import { getPageCount, getPagePosts } from "../lib/paginate"
import PostsPage from "../components/pages/posts-page"
import ContentLayout from "../layouts/content-layout"
import { getAllPostsAndReviews } from "../lib/api/post"

interface IProps {
  posts: IPost[]
  pages: number
}

export default function Page({ posts, pages }: IProps) {
  return (
    <ContentLayout title="Blog" showTitle={false}>
      <></>
      <PostsPage posts={posts} page={0} pages={pages} />
      <></>
    </ContentLayout>
  )
}

export const getStaticProps = async () => {
  const allPosts = await Promise.all(
    getAllPostsAndReviews(getAuthorMap()).map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
        //html : await markdownHtml(post.frontmatter.content || ''),
      }
    })
  )

  const posts = getPagePosts(allPosts, 0, 10)
  const pages = getPageCount(allPosts)

  return {
    props: { posts, pages },
  }
}
