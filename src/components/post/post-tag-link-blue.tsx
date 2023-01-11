import { getTagBaseUrl } from "../../lib/urls"
import BlueLink from "../link/blue-link"

interface IProps {
  tag: string
}

export default function PostTagLinkBlue({ tag }: IProps) {
  return (
    <BlueLink
      href={getTagBaseUrl(tag)}
      ariaLabel={`View posts related to ${tag}`}
      underline={true}
    >
      {tag}
    </BlueLink>
  )
}
