import IBasePortfolio from "./base-portfolio"
import IPostAuthors from "./post-authors"

export default interface IAuthorPortfolio
  extends IBasePortfolio,
    IPostAuthors {}
