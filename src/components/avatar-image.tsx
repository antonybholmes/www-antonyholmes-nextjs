import cn from '../lib/class-names'
import { getUrlFriendlyTag } from '../lib/tags'
import IPostAuthor from '../types/post-author'
import BaseImage from './base-image'

interface IProps {
  author: IPostAuthor
  src?: string
  size?: number[]
  sizes?: number[]
  root?: string
  className?: string
}

const AvatarImage = ({
  author,
  src,
  size = [160, 160],
  sizes = [160, 240],
  root = '/authors',
  className,
}: IProps) => {
  if (src === undefined) {
    src = getUrlFriendlyTag(author.fields.name)
  }

  return (
    <BaseImage
      src={src}
      alt={`Picture of ${author.fields.name}`}
      size={size}
      sizes={sizes}
      root={root}
      className={cn('rounded-full', className)}
    />
  )
}

export default AvatarImage
