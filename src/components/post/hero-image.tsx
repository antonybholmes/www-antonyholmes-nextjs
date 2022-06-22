import IPost from '../../types/post'
import BasePostImage from './base-post-image'

interface IProps {
  post: IPost
  size?: number[]
  sizes?: number[]
  className?: string
}

const HeroImage = ({
  post,
  size = [1600, 900],
  sizes = [480, 640, 1280, 1600],
  className,
}: IProps) => (
  <BasePostImage post={post} size={size} sizes={sizes} className={className} />
)

export default HeroImage
