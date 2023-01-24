import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import { HEADER_LINKS } from "../../menus"
import HeaderLink from "./header-link"
import IHeaderProps from "./header-props"

interface IProps extends IHeaderProps {
  scrollY: number
}

const HeaderLinks = ({
  title,
  tab = "",
  headerMode = "light",
  scrollY,
  className,
}: IProps) => {
  if (!tab) {
    tab = title
  }

  tab = tab.toLowerCase()

  return (
    <ul
      className={cn(
        "flex flex-row flex-nowrap items-center gap-x-2",
        className
      )}
    >
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = link.name.toLowerCase() === tab

        return (
          <li key={index}>
            <HeaderLink
              link={link}
              selected={selected}
              headerMode={headerMode}
              scrollY={scrollY}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
