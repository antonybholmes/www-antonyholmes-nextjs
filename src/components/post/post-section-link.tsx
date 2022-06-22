import cn from '../../lib/class-names'
import { getSectionUrl } from '../../lib/urls'
import IBasePost from '../../types/base-post'
import BaseLink from '../link/base-link'

interface IProps {
  post: IBasePost
  className?: string
}

const PostSectionLink = ({ post, className }: IProps) => (
  <BaseLink
    href={getSectionUrl(post.fields.section)}
    aria={`Read all articles related to ${post.fields.section}`}
    className={cn(
      'block text-xs tracking-wide uppercase font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600',
      className
    )}
  >
    {post.fields.section}
  </BaseLink>
)

export default PostSectionLink
