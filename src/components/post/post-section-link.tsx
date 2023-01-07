import {
  BROKERAGE_SLUG,
  CREDIT_CARD_SLUG,
  PORTFOLIO_SLUG,
  WEBSITE_SLUG,
  CELLPHONE_PLAN_SLUG,
  BOOK_SLUG,
} from "../../constants"
import cn from "../../lib/class-names"
import { getReviewBaseUrl, getSectionBaseUrl } from "../../lib/urls"
import IPostProps from "../../interfaces/post-props"
import BaseLink from "../link/base-link"
import BaseRow from "../base-row"

interface IProps extends IPostProps {
  textSize?: string
}

const PostSectionLink = ({ post, textSize = "text-lg", className }: IProps) => {
  let url: string

  switch (post.frontmatter.section) {
    case "Reviews":
      url = getReviewBaseUrl(post.frontmatter.tags[0])
      break
    case "Credit Cards":
      url = CREDIT_CARD_SLUG
      break
    case "Portfolios":
      url = PORTFOLIO_SLUG
      break
    case "Brokerages":
      url = BROKERAGE_SLUG
      break
    case "Websites":
      url = WEBSITE_SLUG
      break
    case "Cell Phone Plans":
      url = CELLPHONE_PLAN_SLUG
      break
    case "Books":
      url = BOOK_SLUG
      break
    default:
      url = getSectionBaseUrl(post.frontmatter.section)
      break
  }

  return (
    <BaseRow>
      <BaseLink
        href={url}
        ariaLabel={`Read more ${post.frontmatter.section}`}
        underline={true}
        className={cn(
          "bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text font-bold text-transparent",
          textSize,
          className
        )}
      >
        {post.frontmatter.section}
      </BaseLink>
    </BaseRow>
  )
}

export default PostSectionLink
