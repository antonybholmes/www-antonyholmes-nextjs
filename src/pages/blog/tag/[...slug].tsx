import { getAllPosts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import ArticleLayout from '../../../components/layouts/article-layout'
import { range } from 'lodash'
import { getAuthorMap } from '../../../lib/api/author'
import { getFormattedTag, getTags, getUrlFriendlyTag } from '../../../lib/tags'
import { RECORDS_PER_PAGE } from '../../../constants'
import PostsPage from '../../../components/pages/posts-page'
import { getTagBaseUrl } from '../../../lib/urls'
import PageTitle from '../../../components/page-title'
import IPreviewPost from '../../../types/preview-post'

interface IPageProps {
  tag: string
  page: number
  posts: IPreviewPost[]
  pages: number
}

const Page = ({ tag, page, posts, pages }: IPageProps) => (
  <ArticleLayout title={tag} tab="Blog">
    <PageTitle title={tag} supertitle="Tag" />
    <PostsPage
      posts={posts}
      page={page}
      pages={pages}
      root={getTagBaseUrl(tag)}
    />
  </ArticleLayout>
)

export default Page

interface IProps {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: IProps) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  const tag = getFormattedTag(params.slug[0])

  let posts = getAllPosts([
    'title',
    'description',
    'date',
    'slug',
    'url',
    'author',
    'tags',
    'content',
    'ogImage',
    'hero',
  ]).filter(post => post.fields.tags.includes(tag))

  // last element of slug array is page number
  const page = parseInt(params.slug[params.slug.length - 1]) - 1
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )
  const start = page * RECORDS_PER_PAGE
  const end = start + RECORDS_PER_PAGE

  posts = posts.slice(start, end)

  const pagePosts = await Promise.all(
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
    props: {
      tag: tag,
      page: page + 1,
      posts: pagePosts,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'tags'])

  const tags = new Set<string>()

  allPosts.forEach(post => {
    post.fields.tags.forEach((tag: string) => {
      tags.add(tag)
    })
  })

  const paths: { params: { slug: string[] } }[] = []

  Array.from(tags).forEach(tag => {
    const posts = allPosts.filter(post => post.fields.tags.includes(tag))
    const pages = Math.floor(
      (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
    )

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [getUrlFriendlyTag(tag), 'page', (page + 1).toString()],
        },
      })
    })
  })

  // const paths = Array.from(tags).map(tag => {
  //   return {
  //     params: {
  //       slug: tag,
  //     },
  //   }
  // })

  return {
    paths: paths,
    fallback: false,
  }
}
