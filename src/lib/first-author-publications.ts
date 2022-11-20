function getFirstAuthorPublications(publications: any[]) {
  return publications.filter((pub: any) => {
    return (
      pub.tagList.includes("first-author") ||
      pub.tagList.includes("selected") ||
      pub.tagList.includes("additional")
    )
  })
}

export default getFirstAuthorPublications
