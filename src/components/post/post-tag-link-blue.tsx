import { getTagBaseUrl } from "../../lib/urls"
import BlueLink from "../link/blue-link"

interface IProps {
  tag: string
}

const PostTagLinkBlue = ({ tag }: IProps) => (
  <BlueLink
    href={getTagBaseUrl(tag)}
    ariaLabel={`View all articles related to ${tag}`}
    underline={true}
    className="font-bold"
  >
    {tag}
  </BlueLink>
)

export default PostTagLinkBlue
