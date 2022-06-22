import BaseRow from '../../../components/base-row'
import ArticleLayout from '../../../components/layouts/article-layout'
import PostBody from '../../../components/post/post-body'
import { getAllAuthors, getAuthorBySlug } from '../../../lib/api/author'
import { getAllPosts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import IAuthor from '../../../types/author'
import PageTitle from '../../../components/page-title'
import HCenterRow from '../../../components/h-center-row'
import AvatarImageLarge from '../../../components/avatar-image-large'
import { RECORDS_PER_PAGE } from '../../../constants'
import IPreviewPost from '../../../types/preview-post'
import ISlug from '../../../types/slug'
import PostsPage from '../../../components/pages/posts-page'
import { getAuthorUrl } from '../../../lib/urls'

interface IProps {
  author: IAuthor
  posts: IPreviewPost[]
  page: number
  pages: number
}

const Page = ({ author, posts, page, pages }: IProps) => {
  return (
    <ArticleLayout title={author.fields.name}>
      <BaseRow>
        <div className="w-full lg:w-85/100 lg:pr-16">
          <HCenterRow className="lg:hidden">
            <div className="w-1/3 md:w-1/4">
              <AvatarImageLarge author={author} />
            </div>
          </HCenterRow>
          <PageTitle
            title={author.fields.name}
            supertitle="Posts by"
            subtitle={author.fields.title}
            className="text-center lg:text-left mt-8"
          />
          <PostBody content={author.html} className="text-2xl mt-12" />
        </div>
        <div className="hidden lg:block xl:w-1/5 2xl:w-15/100">
          <AvatarImageLarge author={author} />
        </div>
      </BaseRow>

      <section className="border-t border-gray-200 mt-16 pt-16">
        <PostsPage
          posts={posts}
          page={page}
          pages={pages}
          root={getAuthorUrl(author.fields.name)}
        />
      </section>
    </ArticleLayout>
  )
}

export default Page

type Params = {
  params: {
    slug: ISlug
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const slug = params.slug[0]

  let page = 0

  if (params.slug.length > 2) {
    page = parseInt(params.slug[2]) - 1
  }

  const start = page * RECORDS_PER_PAGE
  const end = start + RECORDS_PER_PAGE

  const authorFields = getAuthorBySlug(slug, [
    'id',
    'name',
    'title',
    'picture',
    'content',
    'slug',
  ])

  // Get author html
  const author = {
    ...authorFields,
    html: await markdownHtml(authorFields.fields.content || ''),
  }

  let posts = getAllPosts([
    'title',
    'description',
    'slug',
    'author',
    'section',
    'tags',
    'content',
    'ogImage',
    'hero',
  ]).filter(post => {
    return post.fields.author === author.fields.name
  })

  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  posts = posts.slice(start, end)

  const authorPosts = await Promise.all(
    posts.map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.fields.excerpt || ''),
        authors: [author],
      }
    })
  )

  return {
    props: {
      author: author,
      posts: authorPosts,
      page: page + 1,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const authors = getAllAuthors(['slug'])
  const posts = getAllPosts([
    'title',
    'description',
    'slug',
    'author',
    'section',
    'tags',
    'content',
    'ogImage',
    'hero',
  ])

  const paths: any[] = []

  authors.forEach(author => {
    const authorPost = posts.filter(post => {
      return post.fields.author === author.fields.name
    })

    const pages = Math.floor(
      (authorPost.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
    )

    paths.push({
      params: {
        slug: [author.slug],
      },
    })

    for (let i = 0; i < pages; ++i) {
      paths.push({
        params: {
          slug: [author.slug, 'page', (i + 1).toString()],
        },
      })
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
