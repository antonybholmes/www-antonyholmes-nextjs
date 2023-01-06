export function pubYearCount(publications: any[]): any[] {
  const countMap = new Map()

  publications.forEach(publication => {
    if (!countMap.has(publication.year)) {
      countMap.set(publication.year, 0)
    }

    countMap.set(publication.year, countMap.get(publication.year) + 1)
  })

  const ret = []

  for (let y of Array.from(countMap.keys()).sort()) {
    ret.push({ name: y, value: countMap.get(y) })
  }

  return ret
}

export default pubYearCount
