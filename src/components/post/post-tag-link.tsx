import { getTagUrl } from '../../lib/urls'
import PillButtonLink from '../link/pill-button-link'

interface IProps {
  tag: string
}

const PostTagLink = ({ tag }: IProps) => (
  <PillButtonLink
    href={getTagUrl(tag)}
    aria={`View all articles related to ${tag}`}
    className="bg-gray-200 hover:bg-gray-300  px-3 py-1 mr-2 mb-2"
  >
    {tag}
  </PillButtonLink>
)

export default PostTagLink
