import PreviewPost from "./preview-post"
import IPostsProps from "../../interfaces/posts-props"

interface IProps extends IPostsProps {
  title?: string
}

const RecentPosts = ({ posts, title = "Recent Posts" }: IProps) => {
  return (
    <div className="mt-16 border-t border-solid border-slate-200 pt-16">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="mt-16 grid w-full grid-cols-1 md:grid-cols-3 md:gap-8">
        {posts.map(post => (
          <PreviewPost key={post.fields.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default RecentPosts
