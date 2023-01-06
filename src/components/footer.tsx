import getCopyright from "../lib/copyright"
import { INFO_LINKS } from "../menus"
import ContentDiv from "./content-div"
import WhiteLink from "./link/white-link"

export default function Footer() {
  return (
    <footer className="py-16 text-xs">
      <ContentDiv>
        <></>

        <ul className="flex flex-col justify-between gap-y-4 border-t border-slate-300 pt-4 md:flex-row">
          <li>{getCopyright()}</li>
          <li>
            <ul className="flex flex-row gap-y-4 gap-x-8">
              {INFO_LINKS.map(
                (link: { name: string; url: string }, index: number) => (
                  <li key={index}>
                    <WhiteLink
                      href={link.url}
                      ariaLabel={`View ${link.name}`}
                      underline={true}
                    >
                      {link.name}
                    </WhiteLink>
                  </li>
                )
              )}
            </ul>
          </li>
          {/* <ul className="flex flex-row justify-center gap-x-8">
          <li>{getCopyright()}</li>
        </ul> */}
        </ul>
        <></>
      </ContentDiv>

      {/* <ContentDiv className="py-8">
      <></>
      <>
        <ul className="flex flex-row justify-center gap-x-8">
          <li>{getCopyright()}</li>
        </ul>
      </>
      <></>
    </ContentDiv> */}
    </footer>
  )
}
