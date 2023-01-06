import cn from "../../lib/class-names"
import IPostsProps from "../../interfaces/posts-props"
import BaseCol from "../base-col"
import PreviewPost from "./preview-post"

interface IProps extends IPostsProps {
  rightMode?: boolean
}

const BaseSectionPostsVert = ({ posts, rightMode = true }: IProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 3)
  const otherPosts = posts.slice(3)

  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {!rightMode && <PreviewPost post={topPost} />}

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {rightMode && topPosts.length && (
          <BaseCol className="gap-y-8">
            {topPosts.map((post, index) => {
              return (
                <PreviewPost
                  post={post}
                  className={cn([index > 0, "border-t border-slate-200 pt-8"])}
                  headerClassName="text-3xl"
                  imageClassName="h-64 md:h-48"
                  showImage={true}
                  key={index}
                />
              )
            })}
          </BaseCol>
        )}

        {otherPosts.length > 0 && (
          <BaseCol className="gap-y-8">
            {otherPosts.map((post, index) => {
              return (
                <PreviewPost
                  post={post}
                  className={cn([index > 0, "border-t border-slate-200 pt-8"])}
                  headerClassName="text-3xl"
                  showImage={false}
                  key={index}
                />
              )
            })}
          </BaseCol>
        )}

        {!rightMode && topPosts.length && (
          <BaseCol className="gap-y-8">
            {topPosts.map((post, index) => {
              return (
                <PreviewPost
                  post={post}
                  className={cn([index > 0, "border-t border-slate-200 pt-8"])}
                  headerClassName="text-3xl"
                  imageClassName="h-48"
                  showImage={true}
                  key={index}
                />
              )
            })}
          </BaseCol>
        )}
      </div>

      {rightMode && <PreviewPost post={topPost} />}
    </section>
  )
}

export default BaseSectionPostsVert
