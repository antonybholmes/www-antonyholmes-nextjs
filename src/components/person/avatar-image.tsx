import IClassProps from "../../interfaces/class-props"
import IImageSizeProps from "../../interfaces/image-size-props"
import IPlaceholderProps from "../../interfaces/placeholder-props"
import IPostAuthor from "../../interfaces/post-author"
import cn from "../../lib/class-names"
import { getUrlFriendlyTag } from "../../lib/tags"
import PlaceholderImage from "../placeholder-image"

export interface IAvatarProps extends IClassProps, IPlaceholderProps {
  author: IPostAuthor
}

interface IProps extends IAvatarProps, IImageSizeProps {}

export default function AvatarImage({
  author,
  size = [320, 320],
  loading = "lazy",
  className,
  containerClassName,
  imgClassName,
}: IProps) {
  return (
    <PlaceholderImage
      src={`/assets/images/people/${getUrlFriendlyTag(
        author.frontmatter.name
      )}.webp`}
      alt={`Picture of ${author.frontmatter.name}`}
      size={size}
      loading={loading}
      className={cn("rounded-full", className)}
      containerClassName={containerClassName}
      imgClassName={imgClassName}
    />
  )
}
