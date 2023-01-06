import IPostsProps from "../../interfaces/posts-props"
import PreviewPost from "./preview-post"

interface IProps extends IPostsProps {
  title?: string
}

export default function MorePosts({ posts, title = "Related Posts" }: IProps) {
  return (
    <section>
      <h2 className="border-b-2 border-slate-300 pb-1 text-lg">{title}</h2>
      <ul className="mt-4 flex w-full flex-col">
        {posts.map((post, index) => (
          <li key={index}>
            <PreviewPost
              post={post}
              showSection={false}
              showAvatarImage={false}
              headerClassName="text-2xl"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
