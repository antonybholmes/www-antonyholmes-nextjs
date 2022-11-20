import getContextName from "./context-name"

export function sortByTitle(
  people: any[],
  context: string = "",
  reverse: boolean = false
): any[] {
  let ret: any[] = []

  const titleMap: any = {}

  for (let person of people) {
    const title = getContextName(person.titleMap, context)

    if (!(title in titleMap)) {
      titleMap[title] = []
    }

    titleMap[title].push(person)
  }

  if (reverse) {
    for (let title of Object.keys(titleMap).sort().reverse()) {
      ret = ret.concat(titleMap[title])
    }
  } else {
    for (let title of Object.keys(titleMap).sort()) {
      ret = ret.concat(titleMap[title])
    }
  }

  return ret
}

export default sortByTitle
