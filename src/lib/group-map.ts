import IGroupMap from "../interfaces/group-map"
import IPerson from "../interfaces/person"
import sortByName from "./sort-by-name"

export function getGroupMap(people: IPerson[], context = "lab"): IGroupMap {
  const gm: IGroupMap = {}

  people.forEach(person => {
    const group = person.frontmatter.groups[context]

    if (!(group in gm)) {
      gm[group] = []
    }

    gm[group].push(person)
  })

  const ret: IGroupMap = {}

  for (let g of Object.keys(gm)) {
    ret[g] = sortByName(gm[g])
  }

  return ret
}

export default getGroupMap
