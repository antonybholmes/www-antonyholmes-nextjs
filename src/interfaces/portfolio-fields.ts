import IBrokerage from "./brokerage"
import IReviewFields from "./review-fields"

export default interface IPortfolioFields extends IReviewFields {
  brokerages: IBrokerage[]
}
