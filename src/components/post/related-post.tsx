import IPostProps from "../../interfaces/post-props"
import PreviewPost from "./preview-post"

const RelatedPost = ({ post }: IPostProps) => (
  <PreviewPost
    post={post}
    className="h-full rounded-lg bg-white shadow-box"
    innerClassName="p-5"
    headerClassName="text-3xl"
    showImage={false}
  />
)

export default RelatedPost
