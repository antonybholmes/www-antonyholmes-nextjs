import { SITE_NAME, SITE_VERSION } from '../constants'
import SideLayout from '../components/layouts/side-layout'
import BaseLink from '../components/link/base-link'
import BlueLink from '../components/link/blue-link'

const BOX_STYLE =
  'block rounded-lg overflow-hidden bg-sky-100 text-sky-500 p-6 hover:bg-sky-200 transition duration-300'

const Page = () => {
  return (
    <SideLayout title={SITE_NAME} description={`Version: ${SITE_VERSION}`}>
      <>
        <p>
          Developed by{' '}
          <BlueLink href={'/blog/author/antony-holmes'}>Antony Holmes</BlueLink>
          .
        </p>

        <p className="mt-8">
          This web site was developed using the following technologies:
        </p>

        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <li>
            <BaseLink href="https://reactjs.org" className={BOX_STYLE}>
              React
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://www.nextjs.org" className={BOX_STYLE}>
              Next.js
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://tailwindcss.com/" className={BOX_STYLE}>
              Tailwind
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://www.w3.org/html" className={BOX_STYLE}>
              HTML5
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://www.npmjs.com" className={BOX_STYLE}>
              NPM
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://github.com" className={BOX_STYLE}>
              GitHub
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://www.cloudflare.com/" className={BOX_STYLE}>
              Cloudflare
            </BaseLink>
          </li>
        </ul>
      </>
      <></>
    </SideLayout>
  )
}

export default Page
