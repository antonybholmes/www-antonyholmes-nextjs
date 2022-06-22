import cn from '../lib/class-names'
import HTML from './html'

interface IProps {
  content: string
  className?: string
}

const MarkdownBody = ({ content, className }: IProps) => (
  <HTML content={content} className={cn('markdown', className)} />
)

export default MarkdownBody
