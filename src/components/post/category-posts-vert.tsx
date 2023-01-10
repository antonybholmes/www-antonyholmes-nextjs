import IPostsProps from "../../interfaces/posts-props"
import { getCategoryBaseUrl } from "../../lib/urls"
import BaseLink from "../link/base-link"
import BaseSectionPostsVert from "./base-section-posts-vert"
import PostsHeader from "./posts-header"

interface IProps extends IPostsProps {
  category: string
  rightMode?: boolean
}

const CategoryPostsVert = ({
  category: section,
  posts,
  rightMode = true,
}: IProps) => {
  if (!posts || posts.length == 0) {
    return <></>
  }

  return (
    <section>
      <PostsHeader>
        <BaseLink
          href={getCategoryBaseUrl(section)}
          ariaLabel={`View all articles on ${section}`}
        >
          {section}
        </BaseLink>
      </PostsHeader>

      <BaseSectionPostsVert posts={posts} rightMode={rightMode} />
    </section>
  )
}

export default CategoryPostsVert
