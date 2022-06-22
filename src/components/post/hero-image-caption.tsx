import cn from '../../lib/class-names'
import IPost from '../../types/post'

interface IProps {
  post: IPost
  className?: string
}

const HeroImageCaption = ({ post, className }: IProps) => (
  <p className={cn('text-sm text-center mt-2 text-gray-500', className)}>
    {post.fields.hero.split(';')[1].trim()}
  </p>
)

export default HeroImageCaption
