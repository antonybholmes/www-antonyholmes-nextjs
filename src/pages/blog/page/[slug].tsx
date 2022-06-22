import { getAllPosts } from '../../../lib/api/post'
import { RECORDS_PER_PAGE } from '../../../constants'
import markdownHtml from '../../../lib/markdown-html'
import ArticleLayout from '../../../components/layouts/article-layout'
import { range } from 'lodash'
import { getAuthorMap } from '../../../lib/api/author'
import PostsPage from '../../../components/pages/posts-page'
import IPreviewPost from '../../../types/preview-post'

interface IPageProps {
  page: number
  posts: IPreviewPost[]
  pages: number
}

const Page = ({ page, posts, pages }: IPageProps) => (
  <ArticleLayout title="All Posts" tab="Blog">
    <PostsPage posts={posts} page={page} pages={pages} />
  </ArticleLayout>
)

export default Page

interface IProps {
  params: {
    slug: string
    page: number
    start: number
    end: number
    pages: number
  }
}

export const getStaticProps = async ({ params }: IProps) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  let posts = getAllPosts([
    'title',
    'description',
    'author',
    'section',
    'tags',
    'hero',
    'excerpt',
  ])

  const page = parseInt(params.slug) - 1
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )
  const start = page * RECORDS_PER_PAGE
  const end = start + RECORDS_PER_PAGE

  posts = posts.slice(start, end)

  const pagePosts = await Promise.all(
    posts.map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.fields.excerpt || ''),
        //html : await markdownHtml(post.fields.content || ''),
        authors: [authorMap[post.fields.author]],
      }
    })
  )

  return {
    props: {
      page: page + 1,
      posts: pagePosts,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'title'])

  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  const paths = range(0, pages).map(page => {
    return {
      params: {
        slug: (page + 1).toString(),
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
