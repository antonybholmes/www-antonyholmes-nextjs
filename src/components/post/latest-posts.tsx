import IPostsProps from "../../interfaces/posts-props"
import PostsHeader from "./posts-header"
import PreviewPost from "./preview-post"

const LatestPosts = ({ posts }: IPostsProps) => (
  <section className="mt-8">
    <PostsHeader>Latest Posts</PostsHeader>

    <ul className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-4">
      {posts.slice(0, 4).map((post, index) => {
        return (
          <li key={index}>
            <PreviewPost
              post={post}
              showAvatarImage={false}
              dateBelow={true}
              imgClassName="h-48"
              headerClassName="text-xl"
              contentClassName="text-sm"
            />
          </li>
        )
      })}
    </ul>
  </section>
)

export default LatestPosts
