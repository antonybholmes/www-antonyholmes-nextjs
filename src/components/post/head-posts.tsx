import IPostsProps from "../../interfaces/posts-props"
import PreviewPost from "./preview-post"

interface IProps extends IPostsProps {
  showAvatar?: boolean
}

const HeadPosts = ({ posts, showAvatar = true }: IProps) => (
  <section>
    <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {posts.map((post, index) => (
        <li key={index}>
          <PreviewPost
            post={post}
            showAvatar={showAvatar}
            className="border-t border-slate-200 pt-6"
            imageClassName="h-64 md:h-72"
          />
        </li>
      ))}
    </ul>
  </section>
)

export default HeadPosts
