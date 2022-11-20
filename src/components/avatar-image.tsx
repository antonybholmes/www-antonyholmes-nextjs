import IClassProps from '../interfaces/class-props'
import IPerson from '../interfaces/person'
import cn from '../lib/class-names'
import { getUrlFriendlyTag } from '../lib/tags'
import BaseImage from './base-image'

export interface IAvatarProps extends IClassProps {
  author: IPerson
}

interface IProps extends IAvatarProps {
  src?: string
  size?: [number, number]
  sizes?: number[]
  root?: string
}

const AvatarImage = ({
  author,
  src,
  size = [640, 640],
  root = '/authors',
  className,
}: IProps) => {
  if (src === undefined) {
    src = `/assets/images/people/${getUrlFriendlyTag(author.frontmatter.name)}.webp`
  }

  return (
    <BaseImage
      src={src}
      alt={`Picture of ${author.frontmatter.name}`}
      size={size}
      root={root}
      className={cn('rounded-full', className)}
    />
  )
}

export default AvatarImage
