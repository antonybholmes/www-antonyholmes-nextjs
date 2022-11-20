import { useState } from "react"
import cn from "../../lib/class-names"
import IPerson from "../../interfaces/person"
import BaseLink from "../link/base-link"
//import SecondaryButtonLink from "../link/secondary-button-link"

// `https://pubmed.ncbi.nlm.nih.gov/?term=${person.lastName}+${person.firstName}%5BAuthor%5D&sort=pubdate`

function getLink(person: IPerson): string {
  const tokens = person.frontmatter.name.split(" ")
  const f = tokens[0]
  const l = tokens[tokens.length - 1]

  return `https://pubmed.ncbi.nlm.nih.gov/?term=(${l}+${f[0]}[Author])+AND+(Columbia+University[Affiliation])&sort=pubdate`
}

interface IPubMedLinkProps {
  person: IPerson
}

export default function PubMedLink({ person }: IPubMedLinkProps) {
  const [_hover, _setHover] = useState(false)

  function onHover(hover: boolean) {
    _setHover(hover)
  }

  let url: string

  if (person.frontmatter.pubmed) {
    url = person.frontmatter.pubmed
  } else {
    url = getLink(person)
  }

  return (
    <BaseLink
      href={url}
      className={cn("flex flex-row items-center gap-x-3")}
      ariaLabel="View PubMed article"
      onHover={onHover}
    >
      <img
        src="/assets/svg/pubmed-logo-blue.svg"
        alt="View publications on PubMed"
        className={cn("w-40 transition-opacity duration-200", [
          _hover,
          "opacity-100",
          "opacity-80",
        ])}
        width="249"
        height="69"
      />
    </BaseLink>
  )
}
