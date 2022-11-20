import IFieldMap from "./field-map"
import IBaseMarkdown from "./base-markdown"
import IPersonFields from "./person-fields"

export default interface IPerson extends IBaseMarkdown {
  titleMap: IFieldMap
  frontmatter: IPersonFields
}
