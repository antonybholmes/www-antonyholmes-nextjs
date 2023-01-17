import IBaseFields from "./base-fields"
import PostStatus from "./post-status"

export default interface IPostFields extends IBaseFields {
  index: number
  title: string
  type: string
  description: string
  hero: string
  heroCaption: string
  authors: string[]
  categories: string[]
  related: string[]
  status: "draft" | "published"
  tags: string[]
  pros: string[]
  cons: string[]
  details: string[]
  rating: number
}
