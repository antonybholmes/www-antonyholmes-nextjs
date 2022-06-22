import IPost from '../../types/post'
import WrapRow from '../wrap-row'
import PostTagLink from './post-tag-link'

interface IProps {
  post: IPost
}

const PostTags = ({ post }: IProps) => (
  <WrapRow className="text-xs tracking-wide mt-4">
    {post.fields.tags
      .sort()
      .map(tag => tag.trim().toUpperCase())
      .map((tag: string, index: number) => {
        return <PostTagLink tag={tag} key={index} />
      })}
  </WrapRow>
)

export default PostTags
