import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"

export default function HeroImageCaption({ post, className }: IPostProps) {
  return (
    <div
      className={cn(
        "absolute bottom-0 w-full py-3 text-center text-xs text-white",
        className
      )}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {post.frontmatter.heroCaption}
    </div>
  )
}
