import BreadcrumbChevronIcon from "../../icons/breadcrumb-chevron"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import { getCategoryBaseUrl, getSectionBaseUrl } from "../../lib/urls"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"

interface IProps extends IPostProps {
  textSize?: string
  showSections?: boolean
}

export default function PostCategoryLink({
  post,
  textSize = "text-2xl md:text-lg",
  showSections = false,
  className,
}: IProps) {
  const items: any[] = []

  post.frontmatter.categories.sort().forEach((category, index) => {
    // categories can look like 'Reviews/Credit Cards' so we only want
    // the root part of the category

    if (index > 0) {
      items.push(
        <li
          key={items.length}
          className="block h-1 w-1 rounded-full bg-purple-400"
        />
      )
    }

    const path = category.split("/")

    items.push(
      <li key={items.length}>
        <VCenterRow className="gap-x-2">
          <BaseLink
            href={getCategoryBaseUrl(path[0])}
            ariaLabel={`Read more ${path[0]} posts`}
            underline={true}
            className={cn(
              "bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text font-bold text-transparent",
              textSize,
              className
            )}
          >
            {path[0]}
          </BaseLink>

          {showSections && path.length > 1 && (
            <>
              {/* <span className="text-white">/</span> */}
              <BreadcrumbChevronIcon className="w-3 stroke-white stroke-2" />
              <BaseLink
                href={getSectionBaseUrl(path[0], path[1])}
                ariaLabel={`Read more ${category} posts`}
                underline={true}
                className={cn(
                  "bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text font-bold text-transparent",
                  textSize,
                  className
                )}
              >
                {path[1]}
              </BaseLink>
            </>
          )}
        </VCenterRow>
      </li>
    )
  })

  return <ul className="flex flex-row items-center gap-x-2">{items}</ul>
}
