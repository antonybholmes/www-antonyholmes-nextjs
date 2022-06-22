import cn from '../../lib/class-names'
import IPost from '../../types/post'
import BaseCol from '../base-col'
import PostPreview from './post-preview'

interface IProps {
  posts: IPost[]
  rightMode?: boolean
}

const BaseSectionPosts = ({ posts, rightMode = true }: IProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 5)

  return (
    <>
      <PostPreview post={topPost} className="block lg:hidden" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-4">
        {rightMode && (
          <PostPreview post={topPost} className="hidden lg:block col-span-3" />
        )}
        <BaseCol className="col-span-2">
          {topPosts.map((post, index) => {
            return (
              <PostPreview
                post={post}
                className={cn([
                  index < topPosts.length - 1,
                  'border-b border-gray-200 mb-4 pb-4',
                ])}
                headerClassName="text-4xl"
                showImage={false}
                key={index}
              />
            )
          })}
        </BaseCol>
        {!rightMode && (
          <PostPreview post={topPost} className="hidden lg:block col-span-3" />
        )}
      </div>
    </>
  )
}

export default BaseSectionPosts
