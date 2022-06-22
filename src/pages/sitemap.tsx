import ArticleLayout from '../components/layouts/article-layout'
import BlueLink from '../components/link/blue-link'
import PageTitle from '../components/page-title'
import HEADER_LINKS from '../../_content/menus/header.json'

const Page = () => {
  return (
    <ArticleLayout title="Site Map">
      <PageTitle title={'Site Map'} />

      <div className="grid grid-cols-2 lg:grid-cols-3">
        <section>
          <h3 className="mt-4 font-semibold">Learn More</h3>
          {HEADER_LINKS.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink aria={`Goto ${link.name}`} href={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </section>

        <section>
          <h3 className="mt-4 font-semibold">About</h3>

          <div className="mt-2">
            <BlueLink href="/help" aria={`View help information`}>
              Help
            </BlueLink>
          </div>

          <div className="mt-2">
            <BlueLink href="/privacy" aria={`View privacy information`}>
              Privacy Policy
            </BlueLink>
          </div>
          <div className="mt-2">
            <BlueLink href="/terms" aria={`View terms and conditions`}>
              Terms of Use
            </BlueLink>
          </div>

          <div className="mt-2">
            <BlueLink href="/contact" aria={`Contact`}>
              Contact
            </BlueLink>
          </div>
        </section>
      </div>
    </ArticleLayout>
  )
}

export default Page
