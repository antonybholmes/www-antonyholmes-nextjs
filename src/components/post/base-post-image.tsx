import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BaseImage from "../base-image"

interface IProps extends IPostProps, IImageSizeProps {}

const BasePostImage = ({
  post,
  size = [1600, 800],
  loading = "lazy",
  className,
}: IProps) => (
  <BaseImage
    src={`/assets/images/posts/${post.frontmatter.hero}.webp`}
    alt={post.frontmatter.title}
    size={size}
    loading={loading}
    className={cn("h-full w-full object-cover", className)}
  />
)

export default BasePostImage
