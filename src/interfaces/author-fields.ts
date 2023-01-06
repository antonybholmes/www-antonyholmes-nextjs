import IBaseFields from "./base-fields"

export default interface IAuthorFields extends IBaseFields {
  name: string
  title: string
  email: string
  pubmed: string
}
