import IMarkdownBase from "./markdown-base"
import IPageFields from "./page-fields"

export default interface IBasePage extends IMarkdownBase {
  frontmatter: IPageFields
}
