export function getTopJournals(publications: any[]) {
  const countMap = new Map<string, number>()

  for (let pub of publications) {
    if (!countMap.has(pub.journal)) {
      countMap.set(pub.journal, 0)
    }

    // @ts-ignore
    countMap.set(pub.journal, countMap.get(pub.journal) + 1)
  }

  const pubMap = new Map<number, string[]>()

  for (let e of Array.from(countMap.entries())) {
    if (!pubMap.has(e[1])) {
      pubMap.set(e[1], [])
    }

    // @ts-ignore
    pubMap.get(e[1]).push(e[0])
  }

  const ret: any[] = []

  // sort by count descending then alphabetical if counts the same
  for (let c of Array.from(pubMap.keys())
    .sort((a, b) => a - b)
    .reverse()) {
    // @ts-ignore
    for (let journal of pubMap.get(c).sort()) {
      ret.push([journal, c])
    }
  }

  return ret
}

export default getTopJournals
