export function getInstitutePublications(publications: any[]) {
  return publications.filter((pub: any) => {
    return (
      pub.tagList.includes("icg") ||
      pub.tagList.includes("selected") ||
      pub.tagList.includes("additional")
    )
  })
}

export default getInstitutePublications
