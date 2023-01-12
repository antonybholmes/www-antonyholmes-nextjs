import IAuthorPost from "./author-post"
import IClassProps from "./class-props"

export default interface IPostProps extends IClassProps {
  post: IAuthorPost
}
