import BlueLink from "../components/link/blue-link"
import ContentLayout from "../layouts/content-layout"
import { FOOTER_LINKS, HEADER_LINKS } from "../menus"

export default function Page() {
  return (
    <ContentLayout title="Site Map">
      <></>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="mt-4 font-medium">Learn More</h2>
          {FOOTER_LINKS.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink ariaLabel={`Goto ${link.name}`} href={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </section>

        <section>
          <h2 className="mt-4 font-medium">About</h2>

          <div className="mt-2">
            <BlueLink href="/privacy" ariaLabel="View privacy information">
              Privacy policy
            </BlueLink>
          </div>
          <div className="mt-2">
            <BlueLink href="/terms" ariaLabel="View terms and conditions">
              Terms of use
            </BlueLink>
          </div>

          <div className="mt-2">
            <BlueLink href="/help" ariaLabel="View help information">
              Help
            </BlueLink>
          </div>
        </section>

        {/* <section>
          <h2 className="mt-4 font-medium">Departments</h2>
          {FOOTER_LINKS_2.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink ariaLabel={`Goto ${link.name}`} href={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </section> */}
      </div>
    </ContentLayout>
  )
}
