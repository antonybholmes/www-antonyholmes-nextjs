import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import DateFormatter from "./date-formatter"
import Avatars from "../person/avatars"

const PostDetailsHoz = ({ post, className }: IPostProps) => (
  <section
    className={cn(
      "flex flex-row items-center justify-between border-b-2 border-blue-500 pb-4",
      className
    )}
  >
    <Avatars authors={post.authors} />

    <DateFormatter
      date={post.fields.date}
      className="border-l border-slate-300 py-1 pl-6"
    />

    {/* <PostTags post={post} /> */}

    {/* <PostSocialMedia post={post} /> */}
  </section>
)

export default PostDetailsHoz
