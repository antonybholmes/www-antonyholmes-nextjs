import IBaseFields from "./base-fields"

export default interface IPageFields extends IBaseFields {
  title: string
  authors: string[]
}
