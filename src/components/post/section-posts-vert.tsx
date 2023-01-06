import { getSectionUrl } from "../../lib/urls"
import IPostsProps from "../../interfaces/posts-props"
import BaseLink from "../link/base-link"
import BaseSectionPostsVert from "./base-section-posts-vert"
import PostsHeader from "./posts-header"

interface IProps extends IPostsProps {
  section: string
  rightMode?: boolean
}

const SectionPostsVert = ({ section, posts, rightMode = true }: IProps) => {
  if (!posts || posts.length == 0) {
    return <></>
  }

  return (
    <section>
      <PostsHeader>
        <BaseLink
          href={getSectionUrl(section)}
          ariaLabel={`View all articles on ${section}`}
        >
          {section}
        </BaseLink>
      </PostsHeader>

      <BaseSectionPostsVert posts={posts} rightMode={rightMode} />
    </section>
  )
}

export default SectionPostsVert
