import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import BaseLink from '../link/base-link'
import BasePostImage from './base-post-image'

interface IProps {
  post: IBasePost
  size?: number[]
  sizes?: number[]
  hover?: boolean
  className?: string
}

const PostImage = ({
  post,
  size = [640, 360],
  sizes = [320, 480, 640, 1280],
  hover = false,
  className,
}: IProps) => {
  const image = (
    <BasePostImage
      post={post}
      size={size}
      sizes={sizes}
      className={cn(
        'rounded-lg transition duration-500 overflow-hidden',
        [hover, 'brightness-80', 'hover:brightness-80'],
        className
      )}
    />
  )

  if (post.url) {
    return (
      <BaseLink href={post.url} aria={post.fields.title}>
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}

export default PostImage
