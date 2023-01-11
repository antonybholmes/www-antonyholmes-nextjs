import cn from "../../lib/class-names"
import { getUrlFriendlyTag } from "../../lib/tags"
import IClassProps from "../../interfaces/class-props"
import IPostAuthor from "../../interfaces/post-author"
import BaseImage from "../base-image"

export interface IAvatarProps extends IClassProps {
  author: IPostAuthor
  lazy?: boolean
}

interface IProps extends IAvatarProps {
  src?: string
  size?: [number, number]
  sizes?: number[]
  root?: string
}

const AvatarImage = ({ author, src, size = [320, 320], className }: IProps) => {
  if (src === undefined) {
    src = getUrlFriendlyTag(author.frontmatter.name)
  }

  return (
    <BaseImage
      src={`/assets/images/people/${src}.webp`}
      alt={`Picture of ${author.frontmatter.name}`}
      size={size}
      className={cn("rounded-full", className)}
    />
  )
}

export default AvatarImage
