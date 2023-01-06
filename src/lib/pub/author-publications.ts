export function getAuthorPublications(
  publications: any[],
  authors: Set<string>
) {
  return publications.filter((pub: any) => {
    return (
      pub.authorList.filter((author: string) => authors.has(author)).length > 0
    )
  })
}

export default getAuthorPublications
