import IPostsProps from "../../interfaces/posts-props"
import { getCategoryBaseUrl } from "../../lib/urls"
import BaseLink from "../link/base-link"
import BaseSectionPosts from "./base-section-posts"
import PostsHeader from "./posts-header"

interface IProps extends IPostsProps {
  category: string
  rightMode?: boolean
}

const CategoryPosts = ({ category, posts, rightMode = false }: IProps) => (
  <section className="mt-8">
    <PostsHeader>
      <BaseLink
        href={getCategoryBaseUrl(category)}
        ariaLabel={`View all posts on ${category}`}
      >
        {category}
      </BaseLink>
    </PostsHeader>

    <BaseSectionPosts posts={posts} rightMode={rightMode} />
  </section>
)

export default CategoryPosts
