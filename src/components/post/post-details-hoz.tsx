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
      "flex flex-col gap-y-3 border-b-2 border-blue-500 pb-4",
      className
    )}
  >
    <VCenterRow className="justify-between">
      <Avatars authors={post.authors} />

      <VCenterRow className="hidden gap-2 gap-x-3 border-l border-slate-300 py-1 pl-4 text-sm text-slate-500 md:flex md:pl-6">
        <DateFormatter date={post.fields.date} />
        <span className="block h-1 w-1 rounded-full bg-slate-400" />
        <span>{stats.text}</span>
      </VCenterRow>
    </VCenterRow>
    {/* <PostTags post={post} /> */}

    {/* <PostSocialMedia post={post} /> */}

    <VCenterRow className="gap-x-3 text-sm text-slate-500 md:hidden">
      <DateFormatter date={post.fields.date} />
      <span className="block h-1 w-1 rounded-full bg-slate-400" />
      <span>{stats.text}</span>
    </VCenterRow>
  </section>
)

export default PostDetailsHoz
