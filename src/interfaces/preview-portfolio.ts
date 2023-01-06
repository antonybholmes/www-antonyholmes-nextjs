import IAuthorPortfolio from "./author-portfolio"
import IPostExcerpt from "./post-excerpt"

export default interface IPreviewPortfolio
  extends IAuthorPortfolio,
    IPostExcerpt {}
