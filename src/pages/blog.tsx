import { useRouter } from "next/router"
import PostsPage from "../components/pages/posts-page"
import IPost from "../interfaces/post"
import ContentLayout from "../layouts/content-layout"
import { getAuthorMap } from "../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  sortPosts,
} from "../lib/api/post"
import createCrumbs from "../lib/create-crumbs"
import { getPageCount, getPageItems } from "../lib/paginate"

interface IProps {
  posts: IPost[]
  pages: number
}

export default function Page({ posts, pages }: IProps) {
  return (
    <ContentLayout
      title="Blog"
      showTitle={false}
      crumbs={createCrumbs(useRouter().asPath)}
    >
      <></>
      <PostsPage posts={posts} page={0} pages={pages} showLatest={true} />
      <></>
    </ContentLayout>
  )
}

export const getStaticProps = async () => {
  const allPosts = sortPosts(getAllPosts())
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, 0))),
    getAuthorMap()
  )

  // Generate rss
  //generateRssFeed(allPosts)

  return {
    props: { posts, pages },
  }
}
