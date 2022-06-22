import { getSectionUrl } from '../../lib/urls'
import IPost from '../../types/post'
import BaseLink from '../link/base-link'
import BaseSectionPosts from './base-section-posts'
import PostsHeader from './posts-header'

interface IProps {
  section: string
  posts: IPost[]
  rightMode?: boolean
}

const SectionPosts = ({ section, posts, rightMode = true }: IProps) => (
  <section className="mt-8">
    <PostsHeader>
      <BaseLink
        href={getSectionUrl(section)}
        aria={`View all articles on ${section}`}
      >
        {section}
      </BaseLink>
    </PostsHeader>

    <BaseSectionPosts posts={posts} rightMode={rightMode} />
  </section>
)

export default SectionPosts
