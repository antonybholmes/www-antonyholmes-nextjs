import IPostsProps from "../../interfaces/posts-props"
import PreviewPost from "./preview-post"
import RelatedPost from "./related-post"

interface IProps extends IPostsProps {
  title?: string
}

const RelatedPosts = ({ posts, title = "Related Posts" }: IProps) => (
  <section>
    <h2 className="border-b-2 border-gray-300 pb-4 text-xl font-bold lg:text-2xl">
      {title}
    </h2>
    <ul className="mt-8 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
      {posts.slice(0, 3).map((post, index) => (
        <li key={index}>
          <PreviewPost post={post} />
        </li>
      ))}
    </ul>
  </section>
)

export default RelatedPosts
