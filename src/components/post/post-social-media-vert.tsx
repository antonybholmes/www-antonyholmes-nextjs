import FacebookIcon from "../../icons/facebook"
import LinkedInIcon from "../../icons/linkedin"
import TwitterIcon from "../../icons/twitter"
import IPostProps from "../../interfaces/post-props"
import { getPostUrl } from "../../lib/urls"
import BaseLink from "../link/base-link"
import { CLS_SOCIAL_ICON, CLS_TEXT_GRAY_HOVER } from "./post-social-media"

const PostSocialMediaVert = ({ post }: IPostProps) => {
  const url = getPostUrl(post.fields.slug)
  return (
    <section className="flex flex-col gap-y-3">
      <BaseLink
        ariaLabel="Post article to Twitter"
        href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title}&url=${url}`}
        className={CLS_SOCIAL_ICON}
      >
        <TwitterIcon className={CLS_TEXT_GRAY_HOVER} />
      </BaseLink>

      <BaseLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        ariaLabel="Post article to Facebook"
        className={CLS_SOCIAL_ICON}
      >
        <FacebookIcon className={CLS_TEXT_GRAY_HOVER} />
      </BaseLink>

      <BaseLink
        href={`https://www.linkedin.com/shareArticle?url=${url}`}
        ariaLabel="Post article to LinkedIn"
        className={CLS_SOCIAL_ICON}
      >
        <LinkedInIcon className={CLS_TEXT_GRAY_HOVER} />
      </BaseLink>
    </section>
  )
}

export default PostSocialMediaVert
