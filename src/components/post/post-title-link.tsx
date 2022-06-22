import cn from '../../lib/class-names'
import IBasePost from '../../types/base-post'
import ToBlueLink from '../link/to-blue-link'

interface IProps {
  post: IBasePost
  className?: string
}

const PostTitleLink = ({ post, className }: IProps) => (
  <h2 className={cn('font-bold mt-2', className)}>
    <ToBlueLink href={post.url} aria={`Read article`} underline={true}>
      {post.fields.title}
    </ToBlueLink>
  </h2>
)

export default PostTitleLink
