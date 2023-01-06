export function getJournalPublications(
  publications: any[],
  journals: Set<string>
) {
  return publications.filter((pub: any) => {
    return journals.has(pub.journal)
  })
}

export default getJournalPublications
