import cn from "../../lib/class-names"
import { getUrlFriendlyTag } from "../../lib/tags"
import IClassProps from "../../interfaces/class-props"
import IPostAuthor from "../../interfaces/post-author"
import BaseImage from "../base-image"
import IImageSizeProps from "../../interfaces/image-size-props"

export interface IAvatarProps extends IClassProps {
  author: IPostAuthor
}

interface IProps extends IAvatarProps, IImageSizeProps {}

export default function AvatarImage({
  author,
  size = [320, 320],
  loading = "lazy",
  className,
}: IProps) {
  return (
    <BaseImage
      src={`/assets/images/people/${getUrlFriendlyTag(
        author.frontmatter.name
      )}.webp`}
      alt={`Picture of ${author.frontmatter.name}`}
      size={size}
      loading={loading}
      className={cn("rounded-full", className)}
    />
  )
}
