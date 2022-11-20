import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import getCopyright from "../../lib/copyright"
import { FOOTER_LINKS, INFO_LINKS } from "../../menus"
import ContentDiv from "../content-div"
import BlackLink from "../link/black-link"

export default function Footer({ className }: IClassProps) {
  return (
    <footer className={cn("mt-32", className)}>
      <ContentDiv>
        <></>

        <>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 py-8 text-sm lg:py-16 xl:grid-cols-4 ">
            <div>{getCopyright()}</div>
            <div className="col-span-2 flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h2 className="font-semibold">Resources</h2>
                <ul className="mt-2 flex flex-col gap-2">
                  {FOOTER_LINKS.map(
                    (link: { name: string; url: string }, index: number) => (
                      <li key={index}>
                        <BlackLink
                          href={link.url}
                          ariaLabel={`View ${link.name}`}
                        >
                          {link.name}
                        </BlackLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold">About</h2>
                <ul className="mt-2 flex flex-col gap-2">
                  {INFO_LINKS.map(
                    (link: { name: string; url: string }, index: number) => (
                      <li key={index}>
                        <BlackLink
                          href={link.url}
                          ariaLabel={`View ${link.name}`}
                        >
                          {link.name}
                        </BlackLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </>
        <></>
      </ContentDiv>
    </footer>
  )
}
