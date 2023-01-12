import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import DateFormatter from "./date-formatter"
import Avatars from "../person/avatars"
import VCenterRow from "../v-center-row"
import IReadingStats from "../../interfaces/IReadingStats"

interface IProps extends IPostProps {
  stats: IReadingStats
}

const PostDetailsHoz = ({ post, stats, className }: IProps) => (
  <section
    className={cn(
      "flex flex-row items-center justify-between border-b-2 border-blue-500 pb-4",
      className
    )}
  >
    <Avatars authors={post.authors} />

    <VCenterRow className="text-gray-500 gap-x-2 md:gap-x-3 text-sm">
      <DateFormatter
        date={post.fields.date}
        className="border-l border-gray-300 py-1 pl-4 md:pl-6"
      />
      <span className="rounded-full bg-gray-400 w-1 h-1" />
      <span>{stats.text}</span>
    </VCenterRow>
    {/* <PostTags post={post} /> */}

    {/* <PostSocialMedia post={post} /> */}
  </section>
)

export default PostDetailsHoz
