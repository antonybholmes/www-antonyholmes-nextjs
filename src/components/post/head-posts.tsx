import IPostsProps from "../../interfaces/posts-props"
import PreviewPost from "./preview-post"

interface IProps extends IPostsProps {
  showAvatar?: boolean
  showAvatarImage?: boolean
}

export default function HeadPosts({
  posts,
  showAvatar = true,
  showAvatarImage = false,
}: IProps) {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {posts.map((post, index) => (
          <li key={index}>
            <PreviewPost
              post={post}
              showAvatar={showAvatar}
              showAvatarImage={showAvatarImage}
              className="border-t border-slate-200 pt-6"
              imgClassName="h-48 md:h-64 xl:h-72"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
