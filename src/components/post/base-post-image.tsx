import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import PlaceholderImage from "../placeholder-image"

interface IProps extends IPostProps, IImageSizeProps {
  imgClassName?: string
}

const BasePostImage = ({
  post,
  size = [1600, 800],
  loading = "lazy",
  imgClassName,
  className,
}: IProps) => (
  <PlaceholderImage
    src={`/assets/images/posts/${post.frontmatter.hero}.webp`}
    alt={post.frontmatter.title}
    size={size}
    loading={loading}
    className={className}
    imgClassName={cn("object-cover", imgClassName)}
  />
)

export default BasePostImage
