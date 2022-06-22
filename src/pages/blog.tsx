import { getAllPosts } from '../lib/api/post'
import { getAuthorMap } from '../lib/api/author'
import ArticleLayout from '../components/layouts/article-layout'
import { RECORDS_PER_PAGE } from '../constants'
import PostsPage from '../components/pages/posts-page'
import markdownHtml from '../lib/markdown-html'
import IPreviewPost from '../types/preview-post'

interface IProps {
  posts: IPreviewPost[]
}

const Page = ({ posts }: IProps) => {
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  return (
    <ArticleLayout title="Blog">
      <PostsPage
        posts={posts.slice(0, RECORDS_PER_PAGE)}
        page={1}
        pages={pages}
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
    'related',
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
    props: { posts },
  }
}
