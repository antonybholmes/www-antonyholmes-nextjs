import PreviewPost from "./preview-post"
import HCenterRow from "../h-center-row"
import IPostsProps from "../../interfaces/posts-props"

const KeepReading = ({ posts }: IPostsProps) => {
  return (
    <div className="mt-16 border-t border-solid border-gray-200 pt-16">
      <h2 className="text-center text-3xl font-bold">Keep reading</h2>
      <HCenterRow className="mt-16">
        <div className="grid w-full grid-cols-1 md:w-90/100 md:grid-cols-2 md:gap-8 lg:w-80/100 xl:w-60/100">
          {posts.map(post => (
            <PreviewPost key={post.fields.slug} post={post} />
          ))}
        </div>
      </HCenterRow>
    </div>
  )
}

export default KeepReading
