import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BasePostImage from "./base-post-image"
import HeroImageCaption from "./hero-image-caption"

interface IProps extends IPostProps {
  size?: number[]
  sizes?: number[]
}

const HeroImage = ({ post, size = [2048, 1024], className }: IProps) => (
  <div className="relative overflow-hidden rounded-xl">
    <BasePostImage post={post} size={size} className={cn(className)} />
    {post.frontmatter.heroCaption !== "" && <HeroImageCaption post={post} />}
  </div>
)

export default HeroImage
