import INewsItem from "../interfaces/news-item"
import PostsLayout from "../layouts/posts-layout"
import { getAllJobs } from "../lib/api"

interface IProps {
  allNewsItems: INewsItem[]
}

export default function Page({ allNewsItems }: IProps) {
  return <PostsLayout title="Jobs" posts={allNewsItems} />
}

export const getStaticProps = async () => {
  const allNewsItems = getAllJobs()

  return {
    props: { allNewsItems },
  }
}
