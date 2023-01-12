import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import { getPostBaseUrl } from "../../lib/urls"
import ToBlueLink from "../link/to-blue-link"

const PostTitleLink = ({ post, className }: IPostProps) => (
  <h2 className={cn("font-extrabold capitalize", className)}>
    <ToBlueLink
      href={getPostBaseUrl(post.fields.slug)}
      ariaLabel={post.frontmatter.title}
    >
      {post.frontmatter.title}
    </ToBlueLink>
  </h2>
)

export default PostTitleLink
