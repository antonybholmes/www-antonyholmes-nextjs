import PostPreview from './post-preview'
import IPost from '../../types/post'

interface IProps {
  posts: IPost[]
  title?: string
}

const RecentPosts = ({ posts, title = 'Recent Posts' }: IProps) => {
  return (
    <div className="pt-16 mt-16 border-t border-solid border-gray-200">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 w-full mt-16">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default RecentPosts
