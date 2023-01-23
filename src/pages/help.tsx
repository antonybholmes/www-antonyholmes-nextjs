import { useRouter } from "next/router"
import BaseCol from "../components/base-col"
import BaseRow from "../components/base-row"
import BlueLink from "../components/link/blue-link"
import { ROUNDED_BUTTON_CLS } from "../components/link/rounded-button-link"
import { SITE_NAME, UPDATED, VERSION, YEAR } from "../constants"
import LogoIcon from "../icons/logo-icon-small"
import ContentLayout from "../layouts/content-layout"
import cn from "../lib/class-names"
import createCrumbs from "../lib/create-crumbs"

const CLS = cn(ROUNDED_BUTTON_CLS, "block px-5 py-2 bg-sky-100 font-medium")

export default function Page() {
  return (
    <ContentLayout
      title="Help"
      showTitle={false}
      crumbs={createCrumbs(useRouter().asPath)}
    >
      <></>
      <>
        <BaseCol className="w-full gap-y-4 rounded-xl bg-apple-gray p-5 text-sm xl:w-1/2">
          <BaseRow>
            <LogoIcon />
          </BaseRow>

          <div>
            <p>{`Version ${VERSION}`}</p>
            <p>{`Updated ${UPDATED}`}</p>
          </div>
          <p>
            &copy; {YEAR} {SITE_NAME}. All rights reserved.
          </p>
        </BaseCol>

        <div className="mt-16 text-sm">
          <p>
            This website is made possible by open source software and other
            services:
          </p>

          <ul className="mt-4 flex w-full flex-col gap-y-2 text-sm xl:w-1/2">
            <li className={CLS}>
              <BlueLink href="https://nextjs.org/" ariaLabel="View tool">
                Next.js
              </BlueLink>
            </li>
            <li className={CLS}>
              <BlueLink href="https://reactjs.org" ariaLabel="View tool">
                React
              </BlueLink>
            </li>
            <li className={CLS}>
              <BlueLink href="https://tailwindcss.com/" ariaLabel="View tool">
                Tailwind
              </BlueLink>
            </li>
            {/* <li className={CLS}>
              <BlueLink href="https://www.w3.org/html" ariaLabel="View tool">
                HTML5
              </BlueLink>
            </li> */}
            <li className={CLS}>
              <BlueLink href="https://www.npmjs.com" ariaLabel="View tool">
                NPM
              </BlueLink>
            </li>
            <li className={CLS}>
              <BlueLink href="https://nodejs.org/" ariaLabel="View tool">
                Node.js
              </BlueLink>
            </li>
            <li className={CLS}>
              <BlueLink href="https://github.com" ariaLabel="View tool">
                GitHub
              </BlueLink>
            </li>
            <li className={CLS}>
              <BlueLink
                href="https://code.visualstudio.com"
                ariaLabel="View tool"
              >
                Visual Studio Code
              </BlueLink>
            </li>
          </ul>
        </div>
      </>
    </ContentLayout>
  )
}
