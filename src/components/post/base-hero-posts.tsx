import cn from '../../lib/class-names'
import IPreviewPost from '../../types/preview-post'
import BaseCol from '../base-col'
import HeroPostSmall from './hero-post-small'
import PostPreview from './post-preview'

interface IProps {
  posts: IPreviewPost[]
}

const BaseHeroPosts = ({ posts }: IProps) => {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <PostPreview post={topPost} className="col-span-1" />

      <BaseCol className="col-span-1">
        {topPosts.map((post, index) => {
          return (
            <HeroPostSmall
              post={post}
              className={cn([
                index < topPosts.length - 1,
                'border-b-2 border-gray-100 mb-8 pb-8',
              ])}
              key={index}
            />
          )
        })}
      </BaseCol>
    </div>
  )
}

export default BaseHeroPosts
