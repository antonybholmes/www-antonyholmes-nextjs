import IClassProps from "./class-props"
import IPreviewPost from "./preview-post"

export default interface IPostProps extends IClassProps {
  post: IPreviewPost
}
