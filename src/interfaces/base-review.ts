import IMarkdownBase from "./markdown-base"
import IReviewFields from "./review-fields"

export default interface IBaseReview extends IMarkdownBase {
  fields: IReviewFields
}
