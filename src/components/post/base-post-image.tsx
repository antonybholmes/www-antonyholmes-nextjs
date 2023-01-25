import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import PlaceholderImage, { IPlaceholderProps } from "../placeholder-image"

interface IProps extends IPostProps, IImageSizeProps, IPlaceholderProps {}

const BasePostImage = ({
  post,
  size = [1600, 800],
  loading = "lazy",
  containerClassName,
  imgClassName,
  className,
  children,
}: IProps) => (
  <PlaceholderImage
    src={`/assets/images/posts/${post.frontmatter.hero}.webp`}
    alt={post.frontmatter.title}
    size={size}
    loading={loading}
    className={className}
    containerClassName={containerClassName}
    imgClassName={imgClassName}
  >
    {children}
  </PlaceholderImage>
)

export default BasePostImage
