import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BaseCol from "../base-col"
import HTML from "../html"
import PostAuthor from "./post-author"
import PostImage from "./post-image"
import PostSectionLink from "./post-section-link"
import PostTitleLink from "./post-title-link"
import DateFormatter from "./date-formatter"

interface IProps extends IPostProps {
  showDescription?: boolean
  showAvatar?: boolean
  showImages?: boolean
}

const HeroPostSmall = ({
  post,
  showDescription = true,
  showAvatar = true,
  showImages = false,
  className,
}: IProps) => (
  <article
    className={cn(
      "grid grid-cols-1 md:gap-5",
      [
        post.frontmatter.hero !== "",
        "md:grid-cols-5 lg:grid-cols-3 2xl:grid-cols-4",
      ],
      className
    )}
  >
    {post.frontmatter.hero !== "" && (
      <div className="col-span-1">
        <PostImage post={post} className="mb-4 h-32" />
      </div>
    )}

    <BaseCol className="col-span-4 lg:col-span-2 2xl:col-span-3 gap-y-2">
      <BaseCol>
        <PostSectionLink post={post} textSize="text-normal" />
        <PostTitleLink post={post} className="text-2xl" />
      </BaseCol>
      {showDescription && (
        <HTML html={post.excerpt} className="text-slate-600 text-sm" />
      )}

      <PostAuthor post={post} showAvatar={showAvatar} showImages={showImages} />

      <DateFormatter date={post.fields.date} />
    </BaseCol>
  </article>
)

export default HeroPostSmall
