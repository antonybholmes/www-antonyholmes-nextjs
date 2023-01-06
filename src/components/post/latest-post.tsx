import IPostProps from "../../interfaces/post-props"
import PreviewPost from "./preview-post"

const LatestPost = ({ post }: IPostProps) => (
  <PreviewPost post={post} showImage={false} headerClassName="text-3xl" />
)

export default LatestPost
