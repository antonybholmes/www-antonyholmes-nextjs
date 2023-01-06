import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import VCenterRow from "../v-center-row"
import PostTagLinkBlue from "./post-tag-link-blue"

const PostTags = ({ post, className }: IPostProps) => (
  <VCenterRow
    className={cn("gap-4  border-t border-slate-200 pt-4 text-sm", className)}
  >
    <span className=" font-bold">Tags:</span>
    <ul className="flex flex-row flex-wrap gap-2">
      {post.frontmatter.tags
        .sort()
        .map(tag => tag.trim())
        .map((tag: string, index: number) => {
          return (
            <li key={index}>
              <PostTagLinkBlue tag={tag} />
              {index < post.frontmatter.tags.length - 1 && <span>,</span>}
            </li>
          )
        })}
    </ul>
  </VCenterRow>
)

export default PostTags
