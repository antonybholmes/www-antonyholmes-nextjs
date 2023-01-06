export function sortByDate(
  publications: any[],
  descending: boolean = true
): any[] {
  const pubMap = new Map<number, Map<number, Map<number, Map<string, any>>>>()

  publications.map((publication: any) => {
    if (!pubMap.has(publication.year)) {
      pubMap.set(
        publication.year,
        new Map<number, Map<number, Map<string, any>>>()
      )
    }

    // @ts-ignore
    if (!pubMap.get(publication.year).has(publication.month)) {
      // @ts-ignore
      pubMap
        .get(publication.year)
        .set(publication.month, new Map<number, Map<string, any>>())
    }

    if (
      // @ts-ignore
      !pubMap.get(publication.year).get(publication.month).has(publication.day)
    ) {
      // @ts-ignore
      pubMap
        .get(publication.year)
        .get(publication.month)
        .set(publication.day, new Map<string, any>())
    }

    // @ts-ignore
    pubMap
      .get(publication.year)
      .get(publication.month)
      .get(publication.day)
      .set(publication.title, publication)
  })

  const ret: any[] = []

  if (descending) {
    Array.from(pubMap.keys())
      .sort()
      .reverse()
      .forEach((year: number) => {
        // @ts-ignore
        Array.from(pubMap.get(year).keys())
          .sort()
          .reverse()
          .forEach((month: number) => {
            // @ts-ignore
            Array.from(pubMap.get(year).get(month).keys())
              .sort()
              .reverse()
              .forEach((day: number) => {
                // @ts-ignore
                Array.from(pubMap.get(year).get(month).get(day).keys())
                  .sort()
                  .forEach((title: string) => {
                    // @ts-ignore
                    ret.push(pubMap.get(year).get(month).get(day).get(title))
                  })
              })
          })
      })
  } else {
    Array.from(pubMap.keys())
      .sort()
      .forEach((year: number) => {
        // @ts-ignore
        Array.from(pubMap.get(year).keys())
          .sort()
          .forEach((month: number) => {
            // @ts-ignore
            Array.from(pubMap.get(year).get(month).keys())
              .sort()
              .forEach((day: number) => {
                // @ts-ignore
                Array.from(pubMap.get(year).get(month).get(day).keys())
                  .sort()
                  .forEach((title: string) => {
                    // @ts-ignore
                    ret.push(pubMap.get(year).get(month).get(day).get(title))
                  })
              })
          })
      })
  }

  return ret
}

function sortByJournal(publications: any[], descending: boolean = true): any[] {
  const pubMap: any = {}

  publications.map((publication: any) => {
    if (!(publication.journal in pubMap)) {
      pubMap[publication.journal] = {}
    }

    if (!(publication.title in pubMap[publication.journal])) {
      pubMap[publication.journal][publication.title] = []
    }

    pubMap[publication.journal][publication.title].push(publication)
  })

  let ret: any[] = []

  if (descending) {
    for (let journal of Object.keys(pubMap).sort()) {
      for (let title of Object.keys(pubMap[journal]).sort()) {
        ret = ret.concat(pubMap[journal][title])
      }
    }
  } else {
    for (let journal of Object.keys(pubMap).sort().reverse()) {
      for (let title of Object.keys(pubMap[journal]).sort()) {
        ret = ret.concat(pubMap[journal][title])
      }
    }
  }

  return ret
}

function sortByTitle(publications: any[], descending: boolean = true): any[] {
  const pubMap: any = {}

  publications.map((publication: any) => {
    if (!(publication.title in pubMap)) {
      pubMap[publication.title] = []
    }

    pubMap[publication.title].push(publication)
  })

  let ret: any[] = []

  if (descending) {
    for (let title of Object.keys(pubMap).sort()) {
      ret = ret.concat(pubMap[title])
    }
  } else {
    for (let title of Object.keys(pubMap).sort().reverse()) {
      ret = ret.concat(pubMap[title])
    }
  }

  return ret
}

function sortByFirstAuthor(
  publications: any[],
  descending: boolean = true
): any[] {
  const pubMap: any = {}

  publications.map((publication: any) => {
    if (!(publication.authorList[0] in pubMap)) {
      pubMap[publication.authorList[0]] = {}
    }

    if (!(publication.year in pubMap[publication.authorList[0]])) {
      pubMap[publication.authorList[0]][publication.year] = {}
    }

    if (
      !(
        publication.month in pubMap[publication.authorList[0]][publication.year]
      )
    ) {
      pubMap[publication.authorList[0]][publication.year][publication.month] =
        {}
    }

    if (
      !(
        publication.title in
        pubMap[publication.authorList[0]][publication.year][publication.month]
      )
    ) {
      pubMap[publication.authorList[0]][publication.year][publication.month][
        publication.title
      ] = publication
    }
  })

  const ret: any[] = []

  if (descending) {
    for (let author of Object.keys(pubMap).sort()) {
      for (let year of Object.keys(pubMap[author]).sort().reverse()) {
        for (let month of Object.keys(pubMap[author][year]).sort().reverse()) {
          for (let title of Object.keys(pubMap[author][year][month])) {
            ret.push(pubMap[author][year][month][title])
          }
        }
      }
    }
  } else {
    for (let author of Object.keys(pubMap).sort().reverse()) {
      for (let year of Object.keys(pubMap[author]).sort().reverse()) {
        for (let month of Object.keys(pubMap[author][year]).sort().reverse()) {
          for (let title of Object.keys(pubMap[author][year][month])) {
            ret.push(pubMap[author][year][month][title])
          }
        }
      }
    }
  }

  return ret
}

function sortPublications(
  publications: any[],
  sortOrder: string = "date",
  descending: boolean = true
) {
  switch (sortOrder.toLowerCase()) {
    case "journal":
      // sort by date
      return sortByJournal(publications, descending)
    case "title":
      // sort by title
      return sortByTitle(publications, descending)
    case "first author":
      // sort by date
      return sortByFirstAuthor(publications, descending)
    default:
      // sort by date
      return sortByDate(publications, descending)
  }
}

export default sortPublications
