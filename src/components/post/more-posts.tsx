import IPost from '../../types/post'
import BaseMorePosts from './base-more-posts'

interface IProps {
  posts: IPost[]
}

const MorePosts = ({ posts }: IProps) => (
  <section className="mt-24">
    <BaseMorePosts posts={posts} />
  </section>
)

export default MorePosts
