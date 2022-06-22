import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPostUrl } from '../../lib/articles'
import IPost from '../../types/post'
import BaseLink from '../link/base-link'
import VCenterRow from '../v-center-row'

export const CLS_TEXT_GRAY_HOVER =
  'text-gray-300 hover:text-gray-400 animate-button '

interface IProps {
  post: IPost
}

const PostSocialMedia = ({ post }: IProps) => {
  const url = getPostUrl(post.slug)
  return (
    <VCenterRow>
      <BaseLink
        aria="Post article to Twitter"
        href={`https://twitter.com/intent/tweet?text=${post.fields.title}&url=${url}`}
        className="mr-4"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          className={CLS_TEXT_GRAY_HOVER}
        />
      </BaseLink>

      <BaseLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        aria="Post article to Facebook"
        className="mr-4"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className={CLS_TEXT_GRAY_HOVER}
        />
      </BaseLink>

      <BaseLink
        href={`https://www.linkedin.com/shareArticle?url=${url}`}
        aria="Post article to LinkedIn"
        className="mr-4"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className={CLS_TEXT_GRAY_HOVER}
        />
      </BaseLink>
    </VCenterRow>
  )
}

export default PostSocialMedia
