import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import CompactAvatars from "../person/compact-avatars"
import DateFormatter from "./date-formatter"

interface IProps extends IPostProps {
  showAvatar?: boolean
}

const PostAuthor = ({ post, showAvatar = true, className }: IProps) => (
  <div
    className={cn(
      "flex flex-row items-center justify-between gap-x-8 gap-y-3 lg:flex-col lg:items-start lg:justify-start",
      className
    )}
  >
    {showAvatar ? <CompactAvatars authors={post.authors} /> : <></>}

    <DateFormatter date={post.fields.date} />
  </div>
)

export default PostAuthor
