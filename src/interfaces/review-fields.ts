import IPostFields from "./post-fields"

export default interface IReviewFields extends IPostFields {
  product: string
  productAuthors: []
  pros: string[]
  cons: string[]
  details: string[]
  rating: number
  url: string
}
