import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BasePostImage from "./base-post-image"
import HeroImageCaption from "./hero-image-caption"
import IImageProps from "../../interfaces/image-props"

interface IProps extends IPostProps, IImageProps {}

const HeroImage = ({ post, size = [1600, 800], className }: IProps) => (
  <div className="relative overflow-hidden rounded-xl">
    <BasePostImage post={post} size={size} className={cn(className)} />
    {post.frontmatter.heroCaption !== "" && <HeroImageCaption post={post} />}
  </div>
)

export default HeroImage
