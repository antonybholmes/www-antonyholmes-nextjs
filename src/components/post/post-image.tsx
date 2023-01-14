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
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <BasePostImage
        post={post}
        size={size}
        loading={loading}
        className={className}
        imgClassName="w-full scale-102 transition-ani transition-transform hover:scale-105"
      />
    </div>
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
