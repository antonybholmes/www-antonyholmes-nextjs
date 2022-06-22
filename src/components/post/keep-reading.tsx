import PostPreview from './post-preview'
import IPost from '../../types/post'
import HCenterRow from '../h-center-row'

interface IProps {
  posts: IPost[]
}

const KeepReading = ({ posts }: IProps) => (
  <div className="pt-16 mt-16 border-t border-solid border-gray-200">
    <h2 className="text-center text-3xl font-bold">Keep reading</h2>
    <HCenterRow className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 w-full md:w-9/10 lg:w-8/10 xl:w-6/10">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </HCenterRow>
  </div>
)

export default KeepReading
