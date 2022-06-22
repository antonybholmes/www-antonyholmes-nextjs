import { getAllPosts, getSectionMap } from '../lib/api/post'
import { getAuthorMap } from '../lib/api/author'
import ArticleLayout from '../components/layouts/article-layout'
import { RECORDS_PER_PAGE } from '../constants'
import PostsPage from '../components/pages/posts-page'
import ISectionMap from '../types/section-map'
import IPreviewPost from '../types/preview-post'
import markdownHtml from '../lib/markdown-html'

interface IProps {
  posts: IPreviewPost[]
  sectionMap: ISectionMap
}

const Page = ({ posts, sectionMap }: IProps) => {
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  return (
    <ArticleLayout title="Home">
      <PostsPage
        posts={posts.slice(0, RECORDS_PER_PAGE)}
        page={1}
        pages={pages}
        showLatestPosts={true}
        sectionMap={sectionMap}
      />
    </ArticleLayout>
  )
}

export default Page

export const getStaticProps = async () => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  // Get all the posts and add the authors in
  let posts = getAllPosts([
    'title',
    'description',
    'author',
    'section',
    'tags',
    'hero',
    'excerpt',
  ])

  //await generateSiteMap(posts)
  //await generateRSS(posts)

  posts = await Promise.all(
    posts.map(async post => {
      const excerpt = await markdownHtml(post.fields.excerpt || '')
      return {
        ...post,
        excerpt,
        authors: [authorMap[post.fields.author]],
      }
    })
  )

  return {
    props: { posts: posts, sectionMap: getSectionMap(posts) },
  }
}
