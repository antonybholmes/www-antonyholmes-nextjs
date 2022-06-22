import { getAllPosts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import ArticleLayout from '../../../components/layouts/article-layout'
import { range } from 'lodash'
import { getAuthorMap } from '../../../lib/api/author'
import { getFormattedTag, getUrlFriendlyTag } from '../../../lib/tags'
import { RECORDS_PER_PAGE } from '../../../constants'
import PostsPage from '../../../components/pages/posts-page'
import { getSectionBaseUrl } from '../../../lib/urls'
import PageTitle from '../../../components/page-title'
import IPreviewPost from '../../../types/preview-post'

interface IPageProps {
  section: string
  page: number
  posts: IPreviewPost[]
  pages: number
}

const Page = ({ section, page, posts, pages }: IPageProps) => {
  return (
    <ArticleLayout title={section} tab="Blog">
      <PageTitle title={section} supertitle="Section" />
      <PostsPage
        posts={posts}
        page={page}
        pages={pages}
        root={getSectionBaseUrl(section)}
      />
    </ArticleLayout>
  )
}

export default Page

interface IProps {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: IProps) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  const section = getFormattedTag(params.slug[0])

  let posts = getAllPosts([
    'title',
    'description',
    'date',
    'slug',
    'url',
    'author',
    'section',
    'tags',
    'content',
    'ogImage',
    'hero',
  ]).filter(post => post.fields.section.includes(section))

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
      //const html = await markdownHtml(post.fields.content || '')
      return {
        ...post,
        excerpt,
        //html,
        authors: [authorMap[post.fields.author]],
      }
    })
  )

  return {
    props: {
      section: section,
      page: page + 1,
      posts: pagePosts,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const allPosts = getAllPosts(['slug', 'section', 'title'])

  const section = new Set<string>()

  allPosts.forEach(post => {
    section.add(post.fields.section)
  })

  const paths: { params: { slug: string[] } }[] = []

  Array.from(section).forEach(section => {
    const posts = allPosts.filter(post => post.fields.section.includes(section))
    const pages = Math.floor(
      (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
    )

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [getUrlFriendlyTag(section), 'page', (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}
