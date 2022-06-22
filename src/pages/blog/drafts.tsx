import MorePosts from '../../components/post/more-posts'
import HeroPost from '../../components/post/hero-post'
import { getAllDrafts } from '../../lib/api/post'
import IPost from '../../types/post'
import ArticleLayout from '../../components/layouts/article-layout'
import { getAuthorMap } from '../../lib/api/author'

interface IProps {
  posts: IPost[]
}

const Page = ({ posts }: IProps) => {
  if (posts === undefined || posts.length === 0) {
    return <ArticleLayout title="Drafts" isIndexed={false} />
  }

  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <ArticleLayout title="Drafts" isIndexed={false}>
      {heroPost && <HeroPost post={heroPost} />}
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </ArticleLayout>
  )
}

export default Page

export const getStaticProps = async () => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  // Get all the posts and add the authors in
  const posts = getAllDrafts([
    'title',
    'slug',
    'author',
    'section',
    'tags',
    'hero',
    'excerpt',
  ]).map(post => {
    return {
      ...post,
      authors: [authorMap[post.fields.author]],
    }
  })

  return {
    props: {},
  }
}
