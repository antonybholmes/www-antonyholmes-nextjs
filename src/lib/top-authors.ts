function getTopAuthors(publications: any[]) {
  const countMap = new Map<string, number>()

  publications.forEach(pub => {
    pub.authorList.forEach((author: string) => {
      if (!countMap.has(author)) {
        countMap.set(author, 0)
      }

      // @ts-ignore
      countMap.set(author, countMap.get(author) + 1)
    })
  })

  const pubMap = new Map<number, string[]>()

  Array.from(countMap.entries()).forEach(e => {
    if (!pubMap.has(e[1])) {
      pubMap.set(e[1], [])
    }

    // @ts-ignore
    pubMap.get(e[1]).push(e[0])
  })

  const ret: any[] = []

  // sort by count descending then alphabetical if counts the same
  Array.from(pubMap.keys())
    .sort((a, b) => a - b)
    .reverse()
    .forEach(c => {
      // @ts-ignore
      pubMap
        .get(c)
        .sort()
        .forEach(author => {
          ret.push([author, c])
        })
    })

  return ret
}

export default getTopAuthors
