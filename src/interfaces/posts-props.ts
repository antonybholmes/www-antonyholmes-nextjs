import IClassProps from "./class-props"
import IPreviewPost from "./preview-post"

export default interface IPostsProps extends IClassProps {
  posts: IPreviewPost[]
}
