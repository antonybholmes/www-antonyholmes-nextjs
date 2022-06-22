import IPost from '../../types/post'
import PageTitle from '../page-title'
import PostSectionLink from './post-section-link'
import HeroImageCaption from './hero-image-caption'
import HeroImage from './hero-image'
import ArticleContainer from '../article-container'

interface IProps {
  post: IPost
}

const PostHeader = ({ post }: IProps) => (
  <div className="bg-gray-800">
    <ArticleContainer className="pt-8 lg:pt-16">
      <div className="w-6/10">
        {post.fields.section && <PostSectionLink post={post} />}
        <PageTitle
          title={post.fields.title}
          subtitle={post.fields.description}
          className="mt-4 text-gray-50"
        />
      </div>
      {/* <PostDetails post={post} className="block lg:hidden mb-8" /> */}

      <div className="lg:pt-8 -mb-32">
        <HeroImage post={post} />
        {post.fields.hero.includes(';') && <HeroImageCaption post={post} />}
      </div>
    </ArticleContainer>
  </div>
)

export default PostHeader
