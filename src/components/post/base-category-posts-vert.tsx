import cn from "../../lib/class-names"
import IPostsProps from "../../interfaces/posts-props"
import BaseCol from "../base-col"
import PreviewPost from "./preview-post"

interface IProps extends IPostsProps {
  rightMode?: boolean
}

const BaseCategoryPostsVert = ({ posts, rightMode = true }: IProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 3)
  const otherPosts = posts.slice(3)

  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {!rightMode ? <PreviewPost post={topPost} /> : null}

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {rightMode && topPosts.length ? (
          <BaseCol className="gap-y-8">
            {topPosts.map((post, index) => {
              return (
                <PreviewPost
                  post={post}
                  className={cn([index > 0, "border-t border-slate-200 pt-8"])}
                  headerClassName="text-3xl"
                  imgClassName="h-64 md:h-48"
                  showAvatarImage={true}
                  key={index}
                />
              )
            })}
          </BaseCol>
        ) : null}

        {otherPosts.length > 0 ? (
          <BaseCol className="gap-y-8">
            {otherPosts.map((post, index) => {
              return (
                <PreviewPost
                  post={post}
                  className={cn([index > 0, "border-t border-slate-200 pt-8"])}
                  headerClassName="text-3xl"
                  showAvatarImage={false}
                  key={index}
                />
              )
            })}
          </BaseCol>
        ) : null}

        {!rightMode && topPosts.length ? (
          <BaseCol className="gap-y-8">
            {topPosts.map((post, index) => {
              return (
                <PreviewPost
                  post={post}
                  className={cn([index > 0, "border-t border-slate-200 pt-8"])}
                  headerClassName="text-3xl"
                  imgClassName="h-48"
                  showAvatarImage={true}
                  key={index}
                />
              )
            })}
          </BaseCol>
        ) : null}
      </div>

      {rightMode ? <PreviewPost post={topPost} /> : null}
    </section>
  )
}

export default BaseCategoryPostsVert
