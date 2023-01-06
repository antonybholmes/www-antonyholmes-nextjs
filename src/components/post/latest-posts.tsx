import IPostsProps from "../../interfaces/posts-props"
import LatestPost from "./latest-post"
import PostsHeader from "./posts-header"

const LatestPosts = ({ posts }: IPostsProps) => (
  <section className="mt-8">
    <PostsHeader>Latest Posts</PostsHeader>

    <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-4">
      {posts.slice(0, 4).map((post, index) => {
        return <LatestPost post={post} key={index} />
      })}
    </div>
  </section>
)

export default LatestPosts
