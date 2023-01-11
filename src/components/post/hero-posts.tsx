import cn from "../../lib/class-names"
import IPostsProps from "../../interfaces/posts-props"
import BaseCol from "../base-col"
import HeroPostSmall from "./hero-post-small"
import PreviewPost from "./preview-post"

const HeroPosts = ({ posts }: IPostsProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <section className="grid grid-cols-1 gap-12 xl:grid-cols-10">
      <PreviewPost post={topPost} className="xl:col-span-6" loading="eager" />

      <ul className="flex flex-col gap-y-4 xl:col-span-4">
        {topPosts.map((post, index) => {
          return (
            <li key={index}>
              <HeroPostSmall
                post={post}
                className={cn([index > 0, "border-t border-slate-200 pt-6"])}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default HeroPosts
