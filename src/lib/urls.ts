export function personUrl(person: any): string {
  return `/people/${person.frontmatter.personId}`
}

export function labUrl(group: any): string {
  return `/labs/${group.frontmatter.id}`
}

export function labMembersUrl(group: any): string {
  return `/labs/${group.frontmatter.id}/members`
}
