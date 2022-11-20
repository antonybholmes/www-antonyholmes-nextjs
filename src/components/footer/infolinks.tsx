import getCopyright from "../../lib/copyright"
import { INFO_LINKS } from "../../menus"
import BaseRow from "../base-row"
import BlueLink from "../link/blue-link"

const COLOR = "white"

interface InfoLinksProps {
  title: string
}

export default function InfoLinks({ title }: InfoLinksProps) {
  const copyright = getCopyright()

  let ret: any[] = []

  // ret.push(
  //   <li key={0} className="md:inline mb-2 md:mb-0">
  //     <ColorLink color={COLOR} to="/">{copyright}</ColorLink>
  //   </li>
  // )

  INFO_LINKS.map((link: any, index: number) => {
    ret.push(
      <li key={index + 1} className={`mb-2 md:mb-0 md:ml-8 md:inline`}>
        <BlueLink href={link.link} ariaLabel={link.name}>
          {link.name}
        </BlueLink>
      </li>
    )
  })

  // ret.push(
  //   <li key={0} className="md:inline mb-2">
  //     <ColorLink color={COLOR} to="/">
  //       {copyright}
  //     </ColorLink>
  //   </li>
  // )

  return (
    <BaseRow className="justify-between">
      <div className="w-full lg:w-1/3">
        <BlueLink href="/" ariaLabel={copyright}>
          {copyright}
        </BlueLink>
      </div>
      <div className="mt-2 lg:mt-0">
        <ul className="sm:inline">{ret}</ul>
      </div>
    </BaseRow>
  )
}
