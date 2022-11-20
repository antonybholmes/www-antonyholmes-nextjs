import { PUBLICATIONS_SLUG } from "../constants"

export function usePersonPubsUrl(person: any): string {
  if (person === null) {
    return ""
  }

  return `${PUBLICATIONS_SLUG}/${person.frontmatter.personId}`
}

export default usePersonPubsUrl
