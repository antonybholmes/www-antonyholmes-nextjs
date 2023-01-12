import IAuthorPost from "./author-post"
import IClassProps from "./class-props"

export default interface IPostsProps extends IClassProps {
  posts: IAuthorPost[]
}
