import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BaseImage from "../base-image"

interface IProps extends IPostProps {
  root?: string
  size?: number[]
  sizes?: number[]
  loading?: "lazy" | "eager"
}

const BasePostImage = ({
  post,
  root = "/posts",
  size = [2048, 1024],
  loading = "lazy",
  className,
}: IProps) => (
  <BaseImage
    src={`/assets/images/posts/${post.frontmatter.hero}.webp`}
    alt={post.frontmatter.title}
    root={root}
    size={size}
    loading={loading}
    className={cn("h-full w-full object-cover", className)}
  />
)

export default BasePostImage
