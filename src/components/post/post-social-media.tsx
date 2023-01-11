import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import FacebookIcon from "../../icons/facebook"
import LinkedInIcon from "../../icons/linkedin"
import TwitterIcon from "../../icons/twitter"
import BaseLink from "../link/base-link"
import { getPostUrl } from "../../lib/urls"

export const CLS_TEXT_GRAY_HOVER = "w-6"

export const CLS_SOCIAL_ICON =
  "fill-slate-300 hover:fill-blue-400 transition-ani transition-color border border-slate-200 rounded-full flex flex-row items-center justify-center w-10 h-10"

const PostSocialMedia = ({ post, className }: IPostProps) => {
  const url = getPostUrl(post.fields.slug)
  return (
    <ul className={cn("flex flex-row items-center gap-x-2", className)}>
      <li>
        <BaseLink
          ariaLabel="Post article to Twitter"
          href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title}&url=${url}`}
          className={CLS_SOCIAL_ICON}
        >
          <TwitterIcon className={CLS_TEXT_GRAY_HOVER} />
        </BaseLink>
      </li>
      <li>
        <BaseLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          ariaLabel="Post article to Facebook"
          className={CLS_SOCIAL_ICON}
        >
          <FacebookIcon className={CLS_TEXT_GRAY_HOVER} />
        </BaseLink>
      </li>
      <li>
        <BaseLink
          href={`https://www.linkedin.com/shareArticle?url=${url}`}
          ariaLabel="Post article to LinkedIn"
          className={CLS_SOCIAL_ICON}
        >
          <LinkedInIcon className={CLS_TEXT_GRAY_HOVER} />
        </BaseLink>
      </li>
    </ul>
  )
}

export default PostSocialMedia
