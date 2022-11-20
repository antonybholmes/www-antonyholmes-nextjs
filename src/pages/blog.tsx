import INewsItem from "../interfaces/news-item"
import PostsLayout from "../layouts/posts-layout"
import { getAllPosts } from "../lib/api"

interface IProps {
  allPosts: INewsItem[]
}

export default function Page({ allPosts }: IProps) {
  return <PostsLayout title="Blog" posts={allPosts} />
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}
