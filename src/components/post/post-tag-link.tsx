import { getTagBaseUrl } from "../../lib/urls"
import PillButtonLink from "../link/pill-button-link"

interface IProps {
  tag: string
}

const PostTagLink = ({ tag }: IProps) => (
  <PillButtonLink
    href={getTagBaseUrl(tag)}
    ariaLabel={`View all articles related to ${tag}`}
    className="my-1 mr-2 bg-slate-200 px-3 py-1 hover:bg-slate-300"
  >
    {tag}
  </PillButtonLink>
)

export default PostTagLink
