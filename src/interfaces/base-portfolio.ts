import IMarkdownBase from "./markdown-base"
import IPortfolioFields from "./portfolio-fields"

export default interface IBasePortfolio extends IMarkdownBase {
  frontmatter: IPortfolioFields
}
