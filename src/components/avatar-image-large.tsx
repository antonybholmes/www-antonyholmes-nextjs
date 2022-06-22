import IPostAuthor from '../types/post-author'
import AvatarImage from './avatar-image'

interface IProps {
  author: IPostAuthor
  className?: string
}

const AvatarImageLarge = ({ author, className }: IProps) => (
  <AvatarImage
    author={author}
    size={[240, 240]}
    sizes={[240, 480]}
    className={className}
  />
)

export default AvatarImageLarge
