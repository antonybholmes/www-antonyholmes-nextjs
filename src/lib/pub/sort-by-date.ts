export const sortByDate = (
  publications: Array<any>,
  descending: boolean = true
): Map<number, Array<any>> => {
  const pubMap = new Map<number, Map<number, Map<number, Map<string, any>>>>()

  publications.map((publication: any) => {
    if (!pubMap.has(publication.year)) {
      pubMap.set(
        publication.year,
        new Map<number, Map<number, Map<string, any>>>()
      )
    }

    if (!pubMap.get(publication.year).has(publication.month)) {
      pubMap
        .get(publication.year)
        .set(publication.month, new Map<number, Map<string, any>>())
    }

    if (
      !pubMap.get(publication.year).get(publication.month).has(publication.day)
    ) {
      pubMap
        .get(publication.year)
        .get(publication.month)
        .set(publication.day, new Map<string, any>())
    }

    pubMap
      .get(publication.year)
      .get(publication.month)
      .get(publication.day)
      .set(publication.title, publication)
  })

  const ret: Map<number, Array<any>> = new Map<number, Array<any>>()

  if (descending) {
    Array.from(pubMap.keys())
      .sort()
      .reverse()
      .forEach((year: number) => {
        ret.set(year, [])
        Array.from(pubMap.get(year).keys())
          .sort()
          .reverse()
          .forEach((month: number) => {
            Array.from(pubMap.get(year).get(month).keys())
              .sort()
              .reverse()
              .forEach((day: number) => {
                Array.from(pubMap.get(year).get(month).get(day).keys())
                  .sort()
                  .forEach((title: string) => {
                    ret
                      .get(year)
                      .push(pubMap.get(year).get(month).get(day).get(title))
                  })
              })
          })
      })
  } else {
    Array.from(pubMap.keys())
      .sort()
      .forEach((year: number) => {
        ret.set(year, [])
        Array.from(pubMap.get(year).keys())
          .sort()
          .forEach((month: number) => {
            Array.from(pubMap.get(year).get(month).keys())
              .sort()
              .forEach((day: number) => {
                Array.from(pubMap.get(year).get(month).get(day).keys())
                  .sort()
                  .forEach((title: string) => {
                    ret
                      .get(year)
                      .push(pubMap.get(year).get(month).get(day).get(title))
                  })
              })
          })
      })
  }

  return ret
}

export default sortByDate
