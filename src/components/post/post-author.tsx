import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import CompactAvatars from "../compact-avatars"
import DateFormatter from "./date-formatter"

interface IProps extends IPostProps {
  showAvatar?: boolean
  showImages?: boolean
}

const PostAuthor = ({
  post,
  showAvatar = true,
  showImages = true,
  className,
}: IProps) => (
  <div
    className={cn(
      "flex flex-row items-center justify-between gap-x-8 gap-y-2 lg:flex-col lg:items-start lg:justify-start",
      className
    )}
  >
    {showAvatar && (
      <CompactAvatars authors={post.authors} showImages={showImages} />
    )}
  </div>
)

export default PostAuthor
