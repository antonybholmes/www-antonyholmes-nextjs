import { getSectionUrl } from "../../lib/urls"
import IPostsProps from "../../interfaces/posts-props"
import BaseLink from "../link/base-link"
import BaseSectionPosts from "./base-section-posts"
import PostsHeader from "./posts-header"

interface IProps extends IPostsProps {
  section: string
  rightMode?: boolean
}

const SectionPosts = ({ section, posts, rightMode = false }: IProps) => (
  <section className="mt-8">
    <PostsHeader>
      <BaseLink
        href={getSectionUrl(section)}
        ariaLabel={`View all articles on ${section}`}
      >
        {section}
      </BaseLink>
    </PostsHeader>

    <BaseSectionPosts posts={posts} rightMode={rightMode} />
  </section>
)

export default SectionPosts
