import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BasePostImage from "./base-post-image"
import HeroImageCaption from "./hero-image-caption"

interface IProps extends IPostProps, IImageSizeProps {}

export default function HeroImage({
  post,
  size = [1600, 800],
  className,
}: IProps) {
  return (
    <BasePostImage
      post={post}
      size={size}
      className={cn("rounded-2xl", className)}
      containerClassName="group"
      imgClassName={className}
    >
      {post.frontmatter.heroCaption !== "" ? (
        <HeroImageCaption
          post={post}
          className="trans-ani-700 opacity-0 group-hover:opacity-100"
        />
      ) : (
        <></>
      )}
    </BasePostImage>
  )
}
