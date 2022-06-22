import PostPreview from './post-preview'
import IPreviewPost from '../../types/preview-post'

interface IProps {
  posts: IPreviewPost[]
  showAvatar?: boolean
}

const BaseHeadPosts = ({ posts, showAvatar = true }: IProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} showAvatar={showAvatar} />
    ))}
  </div>
)

export default BaseHeadPosts
