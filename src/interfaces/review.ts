import IAuthorReview from "./author-review"
import IPostExcerpt from "./excerpt"
import IPostHtml from "./html"

export default interface IReview
  extends IAuthorReview,
    IPostExcerpt,
    IPostHtml {}
