import IClassProps from "./class-props"
import IPreviewReview from "./preview-review"

export default interface IReviewProps extends IClassProps {
  post: IPreviewReview
}
