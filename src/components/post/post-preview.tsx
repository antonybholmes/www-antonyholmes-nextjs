import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import PostImage from './post-image'
import IPreviewPost from '../../types/preview-post'
import cn from '../../lib/class-names'
import PostSectionLink from './post-section-link'
import { useState } from 'react'
import UnderlineLink from '../link/underline-link'
import HTML from '../html'
import PostTitleLink from './post-title-link'

interface IProps {
  post: IPreviewPost
  imageClassName?: string
  className?: string
  headerClassName?: string
  innerClassName?: string
  showDescription?: boolean
  showImage?: boolean
  showAvatar?: boolean
}

const PostPreview = ({
  post,
  imageClassName,
  className,
  headerClassName = 'text-4xl lg:text-5xl',
  innerClassName,
  showDescription = true,
  showImage = true,
  showAvatar = true,
}: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = () => {
    setHover(true)
  }

  const _handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <article
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      className={cn('overflow-hidden', className)}
    >
      {showImage && (
        <PostImage post={post} className={cn('mb-4', imageClassName)} />
      )}

      <div className={innerClassName}>
        <PostSectionLink post={post} />
        <PostTitleLink post={post} className={headerClassName} />

        {showDescription && (
          <HTML content={post.excerpt} className="text-gray-500 mt-4" />
        )}
        <div className="text-sm font-medium mt-2">
          <DateFormatter date={post.date} />
        </div>
        {/* <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p> */}
        {showAvatar && (
          <Avatar author={post.authors[0]} isSmall={true} className="mt-4" />
        )}
      </div>
    </article>
  )
}

export default PostPreview
