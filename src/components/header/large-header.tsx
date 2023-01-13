import BaseLink from "../link/base-link"
//import Search from '../search/search'
import LogoIcon from "../../icons/logo-icon"
import ContentDiv from "../content-div"
import HeaderLinks from "./header-links"
import IHeaderProps from "./header-props"

interface IProps extends IHeaderProps {
  scrollY: number
}

export default function LargeHeader({
  title,
  tab,
  headerMode = "light",
  scrollY,
  children,
}: IProps) {
  return (
    <ContentDiv className="hidden md:flex">
      <></>
      <nav className="flex h-full flex-row items-center gap-x-8 lg:gap-x-12">
        <BaseLink href="/" ariaLabel="Goto Homepage">
          <LogoIcon headerMode={headerMode} style={{ marginBottom: "-1px" }} />
        </BaseLink>

        <HeaderLinks
          title={title}
          tab={tab}
          headerMode={headerMode}
          scrollY={scrollY}
        />
        <div className="grow">{children && children}</div>
      </nav>
      <></>
    </ContentDiv>
  )
}
