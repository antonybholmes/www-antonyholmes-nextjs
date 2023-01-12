import cn from "../../lib/class-names"
import IPostsProps from "../../interfaces/posts-props"
import BaseCol from "../base-col"
import PreviewPost from "./preview-post"

interface IProps extends IPostsProps {
  rightMode?: boolean
}

const BaseCategoryPosts = ({ posts, rightMode = false }: IProps) => {
  if (!posts) {
    return <></>
  }

  const topPost = posts[0]
  const topPosts = posts.slice(1, 5)

  return (
    <>
      <PreviewPost post={topPost} className="flex lg:hidden" />

      <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-5">
        {!rightMode && (
          <PreviewPost post={topPost} className="col-span-3 hidden lg:flex" />
        )}
        <BaseCol className="col-span-2">
          {topPosts.map((post, index) => {
            return (
              <PreviewPost
                post={post}
                className={cn([
                  index < topPosts.length - 1,
                  "mb-4 border-b border-slate-200 pb-4",
                ])}
                headerClassName="text-4xl"
                showAvatarImage={false}
                key={index}
              />
            )
          })}
        </BaseCol>
        {rightMode && (
          <PreviewPost post={topPost} className="col-span-3 hidden lg:flex" />
        )}
      </div>
    </>
  )
}

export default BaseCategoryPosts
