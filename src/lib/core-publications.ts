import getInstitutePublications from "./institute-publications"
import getFirstAuthorPublications from "./first-author-publications"

function getCorePublications(publications: any[]) {
  return getInstitutePublications(getFirstAuthorPublications(publications))
}

export default getCorePublications
