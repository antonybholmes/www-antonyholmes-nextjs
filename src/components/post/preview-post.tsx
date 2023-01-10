import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BaseCol from "../base-col"
import HTML from "../html"
import DateFormatter from "./date-formatter"
import PostAuthor from "./post-author"
import PostImage from "./post-image"
import PostCategoryLink from "./post-category-link"
import PostTitleLink from "./post-title-link"

interface IProps extends IPostProps {
  imageClassName?: string
  headerClassName?: string
  innerClassName?: string
  contentClassName?: string
  showImage?: boolean
  showSection?: boolean
  showDescription?: boolean
  showAvatar?: boolean
  showAvatarImage?: boolean
}

export default function PreviewPost({
  post,
  className,
  imageClassName = "h-64 md:h-72 ",
  headerClassName = "text-4xl",
  innerClassName,
  contentClassName = "text-base",
  showImage = true,
  showSection = true,
  showDescription = true,
  showAvatar = true,
  showAvatarImage = true,
}: IProps) {
  return (
    <article className={cn("flex flex-col gap-y-4", className)}>
      {showImage && <PostImage post={post} className={imageClassName} />}

      <BaseCol className={cn("gap-y-2", innerClassName)}>
        <BaseCol className="gap-y-1">
          {showSection && <PostCategoryLink post={post} />}
          <PostTitleLink post={post} className={headerClassName} />
        </BaseCol>
        {showDescription && (
          <HTML
            html={post.excerpt}
            className={cn("text-slate-600", contentClassName)}
          />
        )}

        <PostAuthor post={post} showAvatar={showAvatar} />

        <DateFormatter date={post.fields.date} />
      </BaseCol>
    </article>
  )
}
