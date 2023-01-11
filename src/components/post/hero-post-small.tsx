import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BaseCol from "../base-col"
import CompactAvatars from "../person/compact-avatars"
import HTML from "../html"
import DateFormatter from "./date-formatter"
import PostCategoryLink from "./post-category-link"
import PostImage from "./post-image"
import PostTitleLink from "./post-title-link"

interface IProps extends IPostProps {
  showDescription?: boolean
  showAvatar?: boolean
}

const HeroPostSmall = ({
  post,
  showDescription = true,
  showAvatar = true,
  className,
}: IProps) => (
  <article
    className={cn(
      "grid grid-cols-1 md:gap-6",
      [
        post.frontmatter.hero !== "",
        "md:grid-cols-5 xl:grid-cols-3 3xl:grid-cols-4",
      ],
      className
    )}
  >
    <PostImage post={post} className="mb-4 h-48 md:h-32" />

    <BaseCol className="col-span-4 gap-y-1 xl:col-span-2 3xl:col-span-3">
      <BaseCol>
        <PostCategoryLink post={post} textSize="text-2xl md:text-base" />
        <PostTitleLink post={post} className="text-2xl" />
      </BaseCol>
      {showDescription && (
        <HTML html={post.excerpt} className="text-sm text-slate-600" />
      )}

      {showAvatar && (
        <CompactAvatars
          authors={post.authors}
          showImages={false}
          className="mt-1"
        />
      )}

      <DateFormatter date={post.fields.date} />
    </BaseCol>
  </article>
)

export default HeroPostSmall
