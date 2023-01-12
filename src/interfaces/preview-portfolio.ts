import IAuthorPortfolio from "./author-portfolio"
import IPostExcerpt from "./excerpt"

export default interface IPreviewPortfolio
  extends IAuthorPortfolio,
    IPostExcerpt {}
