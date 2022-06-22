import IPreviewPost from '../../types/preview-post'
import PostPreview from './post-preview'

interface IProps {
  post: IPreviewPost
}

const RelatedPost = ({ post }: IProps) => (
  <PostPreview post={post} headerClassName="text-2xl" showImage={true} />
)

export default RelatedPost
