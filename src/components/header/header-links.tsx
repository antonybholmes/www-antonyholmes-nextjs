import ILink from "../../interfaces/link"
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
}: IProps) => {
  if (!tab) {
    tab = title
  }

  tab = tab.toLowerCase()

  return (
    <ul
      className="flex flex-row flex-nowrap items-center justify-center gap-4"
      style={{ marginBottom: "-1px" }}
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
