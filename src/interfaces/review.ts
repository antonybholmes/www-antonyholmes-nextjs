import IAuthorReview from "./author-review"
import IPostExcerpt from "./post-excerpt"
import IPostHtml from "./post-html"

export default interface IReview
  extends IAuthorReview,
    IPostExcerpt,
    IPostHtml {}
