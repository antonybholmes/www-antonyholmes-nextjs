import IFieldMap from './field-map'

interface IGenericPost {
  slug: string
  url: string
  index: number
  date: string
  fields: IFieldMap
}

export default IGenericPost
