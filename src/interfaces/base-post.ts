import IMarkdownBase from "./markdown-base"
import IPostFields from "./post-fields"

export default interface IBasePost extends IMarkdownBase {
  frontmatter: IPostFields
}
