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
import CondComp from "../component"

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
  contentClassName = "text-sm md:text-base",
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
          <CondComp cond={showSection}>
            <PostCategoryLink post={post} />
          </CondComp>
          <PostTitleLink post={post} className={headerClassName} />
        </BaseCol>

        <CondComp cond={showDescription}>
          <HTML
            html={post.excerpt}
            className={cn("text-slate-600", contentClassName)}
          />
        </CondComp>

        <div
          className={cn("flex", [
            dateBelow,
            "flex-col lg:gap-y-1",
            [
              "flex-col md:flex-row md:justify-between md:items-center",
              [showAvatarImage, "gap-y-1", "lg:gap-y-1"],
            ],
          ])}
        >
          <CondComp cond={showAvatar}>
            <CompactAvatars
              people={post.authors}
              showImages={showAvatarImage}
            />
          </CondComp>

          <DateFormatter date={post.fields.date} />
        </div>
      </BaseCol>
    </article>
  )
}
