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
        "flex flex-row flex-nowrap items-center text-sm font-semibold",
        className
      )}
      style={{ marginBottom: "-1px" }}
    >
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = link.name.toLowerCase() === tab

        return (
          <li key={index} className="inline">
            <HeaderLink link={link} selected={selected} onClick={onClick} />
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
