import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BaseLink from "../link/base-link"
import BasePostImage from "./base-post-image"
import { getPostRelativeUrl } from "../../lib/urls"

interface IProps extends IPostProps {
  size?: number[]
  sizes?: number[]
  lazy?: boolean
}

const PostImage = ({ post, size = [512, 256], className }: IProps) => {
  const image = (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <BasePostImage
        post={post}
        size={size}
        className="absolute transition-transform duration-300 hover:scale-104"
      />
    </div>
  )

  if (post.fields.slug) {
    return (
      <BaseLink
        href={getPostRelativeUrl(post.fields.slug)}
        ariaLabel={post.frontmatter.title}
      >
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}

export default PostImage
