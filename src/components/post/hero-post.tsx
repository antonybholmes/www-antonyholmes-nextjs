import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import IPost from '../../types/post'
import PostSectionLink from './post-section-link'
import PostImage from './post-image'
import { useState } from 'react'
import UnderlineLink from '../link/underline-link'
import cn from '../../lib/class-names'

interface IProps {
  post: IPost
  showDescription?: boolean
  showImage?: boolean
  showAvatar?: boolean
  className?: string
}

const HeroPost = ({
  post,
  showDescription = true,
  showImage = true,
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
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8',
        className
      )}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
    >
      {showImage && (
        <div>
          <PostImage post={post} hover={hover} />
        </div>
      )}
      <div>
        <PostSectionLink post={post} />
        <h2 className="mb-4 font-bold text-4xl lg:text-5xl mt-2">
          <UnderlineLink href={post.url} aria={`Read article`}>
            {post.fields.title}
          </UnderlineLink>
        </h2>
        {showDescription && (
          <p className="text-gray-500 mt-2">{post.fields.excerpt}</p>
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

export default HeroPost
