import PostPreview from './post-preview'
import IPreviewPost from '../../types/preview-post'

interface IProps {
  posts: IPreviewPost[]
}

const BaseMorePosts = ({ posts }: IProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-32">
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} headerClassName="text-3xl" />
    ))}
  </div>
)

export default BaseMorePosts
