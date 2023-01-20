import IImageLoadProps from "../../interfaces/image-load-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BaseCol from "../base-col"
import CompactAvatars from "../person/compact-avatars"
import HTML from "../html"
import VCenterRow from "../v-center-row"
import DateFormatter from "./date-formatter"
import PostCategoryLink from "./post-category-link"
import PostImage from "./post-image"
import PostTitleLink from "./post-title-link"

interface IProps extends IPostProps, IImageLoadProps {
  imgClassName?: string
  headerClassName?: string
  innerClassName?: string
  contentClassName?: string
  showSection?: boolean
  showDescription?: boolean
  showAvatar?: boolean
  showAvatarImage?: boolean
  dateBelow?: boolean
}

export default function PreviewPost({
  post,
  className,
  imgClassName = "h-64 md:h-72",
  headerClassName = "text-2xl md:text-4xl",
  innerClassName,
  contentClassName = "text-base",
  showSection = true,
  showDescription = true,
  showAvatar = true,
  showAvatarImage = true,
  dateBelow = false,
  loading = "lazy",
}: IProps) {
  return (
    <article className={cn("flex flex-col gap-y-2", className)}>
      <PostImage post={post} loading={loading} className={imgClassName} />

      <BaseCol className={cn("gap-y-2", innerClassName)}>
        <BaseCol>
          {showSection && <PostCategoryLink post={post} />}
          <PostTitleLink post={post} className={headerClassName} />
        </BaseCol>
        {showDescription && (
          <HTML
            html={post.excerpt}
            className={cn("text-slate-600", contentClassName)}
          />
        )}

        {dateBelow ? (
          <>
            {showAvatar && (
              <CompactAvatars
                authors={post.authors}
                showImages={showAvatarImage}
              />
            )}

            <DateFormatter date={post.fields.date} />
          </>
        ) : (
          <VCenterRow className="justify-between">
            {showAvatar && (
              <CompactAvatars
                authors={post.authors}
                showImages={showAvatarImage}
              />
            )}

            <DateFormatter date={post.fields.date} />
          </VCenterRow>
        )}
      </BaseCol>
    </article>
  )
}
