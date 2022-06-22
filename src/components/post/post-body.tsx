import cn from '../../lib/class-names'
import MarkdownBody from '../markdown-body'

interface IProps {
  content: string
  className?: string
}

const PostBody = ({ content, className }: IProps) => (
  <MarkdownBody content={content} className={cn('post', className)} />
)

export default PostBody
