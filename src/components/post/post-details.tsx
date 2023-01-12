import IPostProps from "../../interfaces/post-props"
import Avatar from "../person/avatar"
import DateFormatter from "./date-formatter"
import PostSocialMedia from "./post-social-media"
import PostTags from "./post-tags"

const PostDetails = ({ post, className }: IPostProps) => (
  <section className={className}>
    <Avatar author={post.authors[0]} showTitle={true} />
    <div className="mt-6 text-sm tracking-wide">
      <DateFormatter date={post.fields.date} />
      <PostTags post={post} />
    </div>

    <div className="mt-6 border-t-2 border-gray-200 pt-6 text-sm tracking-wide text-gray-500">
      <PostSocialMedia post={post} />
    </div>
  </section>
)

export default PostDetails
