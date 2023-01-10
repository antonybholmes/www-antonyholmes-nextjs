import IFieldMap from "./field-map"
import IMarkdownBase from "./markdown-base"
import IPostFields from "./post-fields"

export default interface IBasePost extends IMarkdownBase {
  index: number
  frontmatter: IPostFields
  categories: IFieldMap
}
