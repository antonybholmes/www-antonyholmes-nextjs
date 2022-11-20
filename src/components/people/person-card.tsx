import { useState } from "react"
import cn from "../../lib/class-names"
//import ContactInfo from "./contactinfo"
import IPerson from "../../interfaces/person"
import getContextName from "../../lib/context-name"
import { getUrlFriendlyTag } from "../../lib/tags"
import getTitleMap from "../../lib/title-map"
import BWImage from "../bw-image"
import HCenterRow from "../h-center-row"
import BaseLink from "../link/base-link"
import BlueLink from "../link/blue-link"

interface IPersonCardProps {
  person: IPerson
  context?: string
  isFaculty?: boolean
  showUrl?: boolean
  photoMode?: string
  showLetters?: boolean
  showPhone?: boolean
  decoding?: "sync" | "async" | "auto"
  loading?: "lazy" | "eager"
}

export default function PersonCard({
  person,
  showUrl,
  photoMode = "show,generic",
  decoding,
  loading,
}: IPersonCardProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter(e: any) {
    setHover(true)
  }

  function onMouseLeave(e: any) {
    setHover(false)
  }

  let fluid = null //imageMap["generic"]
  let b = "border-gray-100"

  const titleMap = getTitleMap(person.frontmatter.titles)

  const titles = getContextName(titleMap).split(";")

  let img

  const alt = `Headshot of ${person.frontmatter.name}`

  if (person.frontmatter.headshot) {
    img = (
      <BWImage
        src={`/assets/images/people/${getUrlFriendlyTag(
          person.frontmatter.name
        )}.webp`}
        extZoom={hover}
        alt={alt}
        className={cn(`w-full overflow-hidden rounded-full border`, b)}
        size={[640, 640]}
        decoding={decoding}
        loading={loading}
      />
    )
  } else {
    img = (
      <img
        src="/assets/svg/generic-person.svg"
        className={cn(
          `w-56 overflow-hidden rounded-full border bg-white lg:w-full`,
          b
        )}
        width="100"
        height="100"
        alt={alt}
      />
    )
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {photoMode.includes("generic") && (
        <HCenterRow>
          {showUrl ? (
            <BaseLink
              href={`/people/${person.frontmatter.personId}`}
              ariaLabel={`View profile for ${person.frontmatter.name}`}
            >
              {img}
            </BaseLink>
          ) : (
            img
          )}
        </HCenterRow>
      )}

      {showUrl ? (
        <BlueLink
          href={`/people/${person.frontmatter.personId}`}
          ariaLabel={`View profile for ${person.frontmatter.name}`}
          className="mt-4 block font-medium"
        >
          {person.frontmatter.name}
        </BlueLink>
      ) : (
        <div className="mt-4 font-medium">{person.frontmatter.name}</div>
      )}

      <div className="text-sm">{titles[0]}</div>
    </div>
  )
}
