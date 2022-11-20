import IBaseMarkdown from "./base-markdown"
import INewsItemFields from "./news-item-fields"

export default interface INewsItem extends IBaseMarkdown {
  date: string
  frontmatter: INewsItemFields
}
