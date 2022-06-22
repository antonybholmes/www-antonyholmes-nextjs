import ArticleLayout from '../components/layouts/article-layout'
import BlueIndexLink from '../components/link/blue-index-link'
import PageTitle from '../components/page-title'

export const Page = () => (
  <ArticleLayout title="Page Not Found">
    <PageTitle title="The page you're looking for can't be found" />
    <BlueIndexLink href="/sitemap" aria="Click to view site map">
      See our site map
    </BlueIndexLink>
  </ArticleLayout>
)

export default Page
