import PostsPage from "../components/pages/posts-page"
import IPost from "../interfaces/post"
import ContentLayout from "../layouts/content-layout"
import { getAuthorMap } from "../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPostsAndReviews,
  sortPosts,
} from "../lib/api/post"
import { getPageCount, getPagePosts } from "../lib/paginate"

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
  const allPosts = sortPosts(getAllPostsAndReviews())
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPagePosts(allPosts, 0, 10))),
    getAuthorMap()
  )

  return {
    props: { posts, pages },
  }
}
