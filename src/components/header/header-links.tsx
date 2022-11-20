import { MouseEventHandler } from "react"
import IClassProps from "../../interfaces/class-props"
import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import { HEADER_LINKS } from "../../menus"
import HeaderLink from "./header-link"

interface IProps extends IClassProps {
  title: string
  tab?: string
  headerMode?: string
  onClick?: MouseEventHandler
}

function HeaderLinks({
  title,
  tab = "",
  headerMode = "light",
  onClick,
  className,
}: IProps) {
  if (!tab) {
    tab = title
  }

  tab = tab.toLowerCase()

  return (
    <ul
      className={cn(
        "flex flex-row flex-nowrap items-center  gap-x-6 text-sm font-medium xl:gap-x-8",
        className
      )}
    >
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = link.name.toLowerCase() === tab

        return (
          <li key={index} className="inline">
            <HeaderLink
              link={link}
              selected={selected}
              onClick={onClick}
              headerMode={headerMode}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
