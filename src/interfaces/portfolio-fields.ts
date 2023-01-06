import IBrokerage from "./brokerage"
import IPostFields from "./post-fields"
import IReviewFields from "./review-fields"

export default interface IPortfolioFields extends IReviewFields {
  brokerages: IBrokerage[]
}
