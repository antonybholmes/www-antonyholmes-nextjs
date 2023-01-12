import cn from "../../lib/class-names"
import IPostsProps from "../../interfaces/posts-props"
import BaseCol from "../base-col"
import HeroPostSmall from "./hero-post-small"
import PreviewPost from "./preview-post"

const HeroPosts = ({ posts }: IPostsProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <section className="flex flex-col xl:flex-row gap-12">
      <PreviewPost
        post={topPost}
        className="w-full xl:w-60/100"
        loading="eager"
      />

      <ul className="flex flex-col gap-y-4 w-full xl:w-40/100">
        {topPosts.map((post, index) => {
          return (
            <li key={index}>
              <HeroPostSmall
                post={post}
                className={cn([index > 0, "border-t border-gray-200 pt-6"])}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default HeroPosts
