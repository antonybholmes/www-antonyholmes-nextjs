import BaseLink from "../link/base-link"
//import Search from '../search/search'
import LogoIcon from "../../icons/logo-icon-com"
import ContentDiv from "../content-div"
import HeaderLinks from "./header-links"
import IHeaderProps from "./header-props"
import IMenuProps from "./menu-props"

interface IProps extends IHeaderProps, IMenuProps {
  scrollY: number
}

function LargeHeader({
  title,
  tab,
  headerMode = "light",
  showMenu = false,
  scrollY,
}: IProps) {
  return (
    <ContentDiv className="hidden md:flex">
      <></>
      <nav className="grid grid-cols-12 items-center gap-8">
        <BaseLink
          href="/"
          ariaLabel="Goto Homepage"
          className="col-span-3 block"
        >
          <LogoIcon headerMode={headerMode} />
        </BaseLink>

        <HeaderLinks
          title={title}
          tab={tab}
          headerMode={headerMode}
          showMenu={showMenu}
          scrollY={scrollY}
        />
        <div className="col-span-3" />
      </nav>
      <></>
    </ContentDiv>
  )
}

export default LargeHeader
