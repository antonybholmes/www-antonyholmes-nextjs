import { useState } from "react"
import PubMedIcon from "../../icons/pubmed"
import IAuthor from "../../interfaces/author"
import BaseLink from "../link/base-link"
//import SecondaryButtonLink from "../link/secondary-button-link"

// `https://pubmed.ncbi.nlm.nih.gov/?term=${person.lastName}+${person.firstName}%5BAuthor%5D&sort=pubdate`

function getLink(person: IAuthor): string {
  const tokens = person.frontmatter.name.split(" ")
  const f = tokens[0]
  const l = tokens[tokens.length - 1]

  return `https://pubmed.ncbi.nlm.nih.gov/?term=(${l}+${f[0]}[Author])+AND+(Columbia+University[Affiliation])&sort=pubdate`
}

interface IPubMedLinkProps {
  person: IAuthor
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
      className="transition-ani flex flex-row items-center gap-x-3 opacity-80 transition-opacity hover:opacity-100"
      ariaLabel="View PubMed article"
      onHover={onHover}
    >
      <PubMedIcon className="w-40" />
    </BaseLink>
  )
}
