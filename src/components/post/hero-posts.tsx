import cn from "../../lib/class-names"
import IPostsProps from "../../interfaces/posts-props"
import BaseCol from "../base-col"
import HeroPostSmall from "./hero-post-small"
import PreviewPost from "./preview-post"

const HeroPosts = ({ posts }: IPostsProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <section className="grid grid-cols-1 gap-12 xl:grid-cols-2">
      <PreviewPost post={topPost} className="col-span-1" />

      <BaseCol className="col-span-1 gap-y-4">
        {topPosts.map((post, index) => {
          return (
            <HeroPostSmall
              post={post}
              className={cn([index > 0, "border-t border-slate-200 pt-6"])}
              key={index}
            />
          )
        })}
      </BaseCol>
    </section>
  )
}

export default HeroPosts
