import IPostProps from "../../interfaces/post-props"
import PreviewPost from "./preview-post"

export default function RelatedPost({ post }: IPostProps) {
  return (
    <PreviewPost
      post={post}
      className="h-full rounded-lg bg-white shadow-box"
      innerClassName="p-5"
      headerClassName="text-3xl"
      showAvatarImage={false}
    />
  )
}
