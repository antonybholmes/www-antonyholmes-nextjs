import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import { getPostBaseUrl } from "../../lib/urls"
import BaseLink from "../link/base-link"
import BasePostImage from "./base-post-image"

interface IProps extends IPostProps, IImageSizeProps {}

export default function PostImage({
  post,
  size = [800, 400],
  loading = "lazy",
  className,
}: IProps) {
  const image = (
    <BasePostImage
      post={post}
      size={size}
      loading={loading}
      className={className}
      containerClassName={cn("rounded-xl", className)}
      imgClassName="scale-102 trans-ani-300 transition-transform hover:scale-105"
    />
  )

  if (post.fields.slug) {
    return (
      <BaseLink
        href={getPostBaseUrl(post.fields.slug)}
        ariaLabel={post.frontmatter.title}
      >
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}
