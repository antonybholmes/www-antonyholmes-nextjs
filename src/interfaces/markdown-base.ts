import IMarkdownFields from "./markdown-fields"

export default interface IMarkdownBase {
  index: number
  path: string
  fields: IMarkdownFields
}
