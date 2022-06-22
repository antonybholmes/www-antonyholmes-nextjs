import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import BaseImage from '../base-image'

interface IProps {
  post: IBasePost
  root?: string
  size?: number[]
  sizes?: number[]
  className?: string
}

const BasePostImage = ({
  post,
  root = '/posts',
  size = [640, 360],
  sizes = [320, 480, 640, 1280],
  className,
}: IProps) => (
  <BaseImage
    src={post.fields.hero.split(';')[0]}
    root={root}
    size={size}
    sizes={sizes}
    alt={post.fields.title}
    className={cn('w-full rounded-lg', className)}
  />
)

export default BasePostImage
