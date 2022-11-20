import IStringMap from "./string-map"

export default interface IPersonFields {
  pubmed: string
  personId: string
  name: string
  headshot: boolean
  headerImage: boolean
  postNominalLetters: string
  titles: string[][]
  phone: string
  fax: string
  email: string
  room: string
  researchAreas: string[]
  tags: string[]
  groups: IStringMap
  labs: string[]
  caption: string
  profile: string
}
