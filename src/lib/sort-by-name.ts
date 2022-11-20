import IPerson from "../interfaces/person"

export function sortByName(people: IPerson[]): IPerson[] {
  const peopleMap: any = {}

  people.forEach(person => {
    const tokens = person.frontmatter.name.split(" ")
    const fn = tokens[0]
    const ln = tokens[tokens.length - 1]

    if (!(ln in peopleMap)) {
      peopleMap[ln] = {}
    }

    peopleMap[ln][fn] = person
  })

  const ret = []

  for (let ln of Object.keys(peopleMap).sort()) {
    for (let fn of Object.keys(peopleMap[ln]).sort()) {
      ret.push(peopleMap[ln][fn])
    }
  }

  return ret
}

export default sortByName
