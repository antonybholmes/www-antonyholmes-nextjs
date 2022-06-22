import IPreviewPost from '../../types/preview-post'
import BaseHeroPosts from './base-hero-posts'

interface IProps {
  posts: IPreviewPost[]
}

const HeroPosts = ({ posts }: IProps) => (
  <section className="mt-8">
    <BaseHeroPosts posts={posts} />
  </section>
)

export default HeroPosts
