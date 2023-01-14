import { GITHUB_URL } from "../constants"
import GitHubIcon from "../icons/github"
import RssIcon from "../icons/rss"
import getCopyright from "../lib/copyright"
import { INFO_LINKS } from "../menus"
import ContentDiv from "./content-div"
import HCenterRow from "./h-center-row"
import ExtLink from "./link/ext-link"
import WhiteLink from "./link/white-link"

export default function Footer() {
  return (
    <footer className="pt-32 pb-16">
      <ContentDiv>
        <></>
        <>
          <ul className="flex flex-row justify-center gap-x-8 border-t border-slate-200 pt-16 text-sm  font-semibold">
            <li>{getCopyright()}</li>
          </ul>
        </>
        <></>
      </ContentDiv>

      <ContentDiv className="pt-8">
        <></>
        <HCenterRow className="items-center gap-x-4">
          <ExtLink href={GITHUB_URL} ariaLabel="View my GitHub profile">
            <GitHubIcon className="w-5" />
          </ExtLink>

          <ExtLink href="/rss.xml" ariaLabel="View RSS feed">
            <RssIcon className="w-5 fill-orange-500" />
          </ExtLink>
        </HCenterRow>
      </ContentDiv>

      <ContentDiv className="pt-8">
        <></>
        <ul className="flex flex-col items-center text-xs">
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
    </footer>
  )
}
