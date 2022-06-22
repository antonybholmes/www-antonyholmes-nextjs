import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import PostSectionLink from './post-section-link'
import PostImage from './post-image'
import { useState } from 'react'
import cn from '../../lib/class-names'
import HTML from '../html'
import IPreviewPost from '../../types/preview-post'
import PostTitleLink from './post-title-link'

interface IProps {
  post: IPreviewPost
  showDescription?: boolean
  showAvatar?: boolean
  className?: string
}

const HeroPostSmall = ({
  post,
  showDescription = true,
  showAvatar = true,
  className,
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
      className={cn('grid grid-cols-1 md:grid-cols-3 gap-6', className)}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
    >
      <div className="col-span-1">
        <PostImage post={post} hover={hover} />
      </div>

      <div className="col-span-2">
        <PostSectionLink post={post} />
        <PostTitleLink post={post} className="text-3xl" />

        {showDescription && (
          <HTML content={post.excerpt} className="text-gray-500 mt-2" />
        )}
        <div className="mt-2 text-sm font-medium">
          <DateFormatter date={post.date} />
        </div>

        {/* <p className="text-lg leading-relaxed mb-4">{post.frontmatter.excerpt}</p> */}
        {showAvatar && (
          <Avatar author={post.authors[0]} isSmall={true} className="mt-4" />
        )}
      </div>
    </article>
  )
}

export default HeroPostSmall
