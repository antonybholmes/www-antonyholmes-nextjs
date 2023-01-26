import IClassProps from "../../interfaces/class-props"
import IImageSizeProps from "../../interfaces/image-size-props"
import IPlaceholderProps from "../../interfaces/placeholder-props"
import IPostAuthor from "../../interfaces/post-author"
import cn from "../../lib/class-names"
import { getUrlFriendlyTag } from "../../lib/tags"
import PlaceholderImage from "../placeholder-image"

export interface IAvatarProps extends IClassProps, IPlaceholderProps {
  person: IPostAuthor
}

interface IProps extends IAvatarProps, IImageSizeProps {}

export default function AvatarImage({
  person,
  size = [160, 160],
  loading = "lazy",
  className,
  containerClassName,
  imgClassName,
}: IProps) {
  return (
    <PlaceholderImage
      src={`/assets/images/people/${getUrlFriendlyTag(
        person.frontmatter.name
      )}.webp`}
      alt={`Picture of ${person.frontmatter.name}`}
      size={size}
      loading={loading}
      className={cn("rounded-full", className)}
      containerClassName={containerClassName}
      imgClassName={imgClassName}
    />
  )
}
