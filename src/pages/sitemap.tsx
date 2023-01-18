import BlueLink from "../components/link/blue-link"
import ContentLayout from "../layouts/content-layout"
import { HEADER_LINKS } from "../menus"

export default function Page() {
  return (
    <ContentLayout title="Site Map">
      <></>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8" slot="main">
        <section>
          <h3 className="mt-4 font-bold">Learn More</h3>
          <ul className="mt-4 flex flex-col gap-y-2">
            {HEADER_LINKS.map((link: any, i: number) => {
              return (
                <li key={i}>
                  <BlueLink ariaLabel={`Goto ${link.name}`} href={link.url}>
                    {link.name}
                  </BlueLink>
                </li>
              )
            })}
          </ul>
        </section>

        <section>
          <h3 className="mt-4 font-bold">About</h3>
          <ul className="mt-4 flex flex-col gap-y-2">
            <li>
              <BlueLink href="/help" ariaLabel="View help information">
                Help
              </BlueLink>
            </li>

            <li>
              <BlueLink href="/privacy" ariaLabel="View privacy information">
                Privacy Policy
              </BlueLink>
            </li>
            <li>
              <BlueLink href="/terms" ariaLabel="View terms and conditions">
                Terms of Use
              </BlueLink>
            </li>

            <li>
              <BlueLink href="/contact" ariaLabel="Contact us">
                Contact
              </BlueLink>
            </li>
          </ul>
        </section>
      </div>
    </ContentLayout>
  )
}
