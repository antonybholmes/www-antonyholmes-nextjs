import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BaseRow from "../base-row"
import PostTagLinkBlue from "./post-tag-link-blue"

export default function PostTags({ post, className }: IPostProps) {
  return (
    <BaseRow className={cn("gap-x-6", className)}>
      <span className="font-bold">Tags:</span>
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
    </BaseRow>
  )
}
