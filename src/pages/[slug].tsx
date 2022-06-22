import ArticleLayout from '../components/layouts/article-layout'
import MarkdownBody from '../components/markdown-body'
import PageTitle from '../components/page-title'
import TwoThirdsColLayout from '../components/layouts/two-thirds-col-layout'
import { getPageBySlug } from '../lib/api/page'
import markdownHtml from '../lib/markdown-html'
import IPage from '../types/page'

interface IProps {
  page: IPage
}

const Page = ({ page }: IProps) => {
  //const heroPost = posts[0]
  //const morePosts = posts.slice(1)

  return (
    <ArticleLayout title={page.fields.title}>
      <TwoThirdsColLayout>
        <>
          <PageTitle
            title={page.fields.title}
            subtitle={page.fields.subtitle}
          />
          <MarkdownBody content={page.html} />
        </>
        <></>
      </TwoThirdsColLayout>
    </ArticleLayout>
  )
}

export default Page

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const pageFields = getPageBySlug(params.slug, [
    'title',
    'subtitle',
    'hero',
    'content',
  ])

  // Get author html
  const page = {
    ...pageFields,
    html: await markdownHtml(pageFields.fields.content || ''),
  }

  return {
    props: {
      page: page,
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'faq',
        },
      },
      {
        params: {
          slug: 'support',
        },
      },
      {
        params: {
          slug: 'terms',
        },
      },
      {
        params: {
          slug: 'privacy',
        },
      },
    ],
    fallback: false,
  }
}
