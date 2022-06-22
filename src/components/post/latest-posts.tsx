import IPreviewPost from '../../types/preview-post'
import PostPreview from './post-preview'
import PostsHeader from './posts-header'

interface IProps {
  posts: IPreviewPost[]
}

const LatestPosts = ({ posts }: IProps) => (
  <section className="mt-8">
    <PostsHeader>Latest Posts</PostsHeader>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
      {posts.slice(0, 4).map((post, index) => {
        return (
          <PostPreview
            post={post}
            showImage={false}
            key={index}
            headerClassName="text-3xl"
          />
        )
      })}
    </div>
  </section>
)

export default LatestPosts
