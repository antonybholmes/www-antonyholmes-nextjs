import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BaseLink from "../link/base-link"
import BasePostImage from "./base-post-image"
import { getPostRelativeUrl } from "../../lib/urls"
import IImageProps from "../../interfaces/image-props"

interface IProps extends IPostProps, IImageProps {}

const PostImage = ({ post, size = [800, 400], className }: IProps) => {
  const image = (
    <div className={cn(" overflow-hidden rounded-lg", className)}>
      <BasePostImage
        post={post}
        size={size}
        className="transition-ani transition-transform scale-102 hover:scale-105"
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
