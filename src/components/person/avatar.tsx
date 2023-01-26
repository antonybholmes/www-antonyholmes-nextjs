import cn from "../../lib/class-names"
import { getAuthorBaseUrl } from "../../lib/urls"
import IClassProps from "../../interfaces/class-props"
import IPostAuthor from "../../interfaces/post-author"
import AvatarImage from "./avatar-image"
import BaseCol from "../base-col"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"

interface IProps extends IClassProps {
  person: IPostAuthor
  showTitle?: boolean
  isSmall?: boolean
}

export default function Avatar({
  person,
  showTitle = false,
  isSmall = false,
  className,
}: IProps) {
  const href = getAuthorBaseUrl(person.frontmatter.name)

  return (
    <VCenterRow className={cn("gap-x-3", className)}>
      <BaseLink
        href={href}
        ariaLabel={`Click to read more about ${person.frontmatter.name}`}
      >
        <AvatarImage
          person={person}
          className={cn([isSmall, "h-10 w-10", "h-12 w-12"])}
        />
      </BaseLink>
      <BaseCol>
        <BaseLink
          href={href}
          ariaLabel={`Click to read more information about ${person.frontmatter.name}`}
          underline={true}
          className={cn("font-bold", [isSmall, "text-sm"])}
        >
          {person.frontmatter.name}
        </BaseLink>

        {showTitle && (
          <div className="text-sm font-light text-slate-500">
            {person.frontmatter.title.split(",")[0].trim()}
          </div>
        )}
      </BaseCol>
    </VCenterRow>
  )
}
