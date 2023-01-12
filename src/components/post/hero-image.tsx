import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BasePostImage from "./base-post-image"
import HeroImageCaption from "./hero-image-caption"
import IImageSizeProps from "../../interfaces/image-size-props"

interface IProps extends IPostProps, IImageSizeProps {}

export default function HeroImage({
  post,
  size = [1600, 800],
  className,
}: IProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <BasePostImage post={post} size={size} className={cn(className)} />
      {post.frontmatter.heroCaption !== "" && <HeroImageCaption post={post} />}
    </div>
  )
}
