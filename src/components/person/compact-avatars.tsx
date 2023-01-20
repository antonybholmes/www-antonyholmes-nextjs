import IClassProps from "../../interfaces/class-props"
import IPostAuthor from "../../interfaces/post-author"
import cn from "../../lib/class-names"
import { getAuthorBaseUrl } from "../../lib/urls"
import AvatarImage from "./avatar-image"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"

interface IProps extends IClassProps {
  authors: IPostAuthor[]
  showImages?: boolean
}

export default function CompactAvatars({
  authors,
  showImages = true,
  className,
}: IProps) {
  return (
    <VCenterRow className="gap-x-3">
      {showImages ? (
        <ul
          className={cn("relative h-12", className)}
          style={{ width: `${3 + (authors.length - 1) * 0.5}rem` }}
        >
          {authors.map((author, index) => (
            <li key={index}>
              <BaseLink
                href={getAuthorBaseUrl(author.frontmatter.name)}
                ariaLabel={`Click to read more about ${author.frontmatter.name}`}
                className={cn(
                  "absolute block rounded-full border border-white",
                  `ml-${index * 2}`
                )}
              >
                <AvatarImage author={author} className="h-12 w-12" />
              </BaseLink>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}

      <ul className="flex flex-row flex-wrap items-center gap-x-1 text-sm font-bold">
        {authors.map((author, index) => (
          <li key={index}>
            <BaseLink
              href={getAuthorBaseUrl(author.frontmatter.name)}
              ariaLabel={`Click to read more about ${author}`}
              underline={true}
            >
              {author.frontmatter.name}
            </BaseLink>
            {index < authors.length - 2 ? <span>,</span> : <></>}
            {index === authors.length - 2 ? (
              <span className="ml-1">&</span>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </VCenterRow>
  )
}
