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

const PostCategoryLink = ({
  post,
  textSize = "text-lg",
  showSections = false,
  className,
}: IProps) => {
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

    const sections = category.split("/")

    items.push(
      <li key={items.length}>
        <VCenterRow className="gap-x-1">
          <BaseLink
            href={getCategoryBaseUrl(sections[0])}
            ariaLabel={`Read more ${sections[0]} posts`}
            underline={true}
            className={cn(
              "bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text font-bold text-transparent",
              textSize,
              className
            )}
          >
            {sections[0]}
          </BaseLink>

          {showSections && sections.length > 1 && (
            <>
              {/* <span className="text-white">/</span> */}
              <BreadcrumbChevronIcon className="w-4 stroke-white" />
              <BaseLink
                href={getSectionBaseUrl(sections[0], sections[1])}
                ariaLabel={`Read more ${category} posts`}
                underline={true}
                className={cn(
                  "bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text font-bold text-transparent",
                  textSize,
                  className
                )}
              >
                {sections[1]}
              </BaseLink>
            </>
          )}
        </VCenterRow>
      </li>
    )
  })

  return <ul className="flex flex-row items-center gap-x-2">{items}</ul>
}

export default PostCategoryLink
