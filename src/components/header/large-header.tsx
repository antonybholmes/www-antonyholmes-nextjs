import BaseLink from "../link/base-link"
//import Search from '../search/search'
import LogoIcon from "../../icons/logo-icon"
import VCenterRow from "../v-center-row"
import HeaderLinks from "./header-links"
import IHeaderProps from "./header-props"
import { IMenuOverlayProps } from "./menu-overlay"
import MenuOpenButton from "./menu-button-open"
import LogoIconSmall from "../../icons/logo-icon-small"

interface IProps extends IHeaderProps, IMenuOverlayProps {
  scrollY: number
}

export default function LargeHeader({
  title,
  tab,
  showMenu,
  onClick,
  headerMode = "light",
  scrollY,
  children,
}: IProps) {
  return (
    <nav className="grid h-full grid-cols-3 items-center gap-x-1">
      <VCenterRow className="ml-2 gap-x-4">
        <VCenterRow className="gap-x-2">
          <MenuOpenButton
            onClick={onClick}
            showMenu={showMenu}
            headerMode={headerMode}
          />
          <BaseLink href="/" ariaLabel="Goto Homepage">
            <LogoIconSmall headerMode={headerMode} className="3xl:hidden" />
            <LogoIcon headerMode={headerMode} className="hidden 3xl:block" />
          </BaseLink>
        </VCenterRow>

        <HeaderLinks
          title={title}
          tab={tab}
          headerMode={headerMode}
          scrollY={scrollY}
        />
      </VCenterRow>
      <div className="hidden lg:block">{children && children}</div>
      <div />
    </nav>
  )
}
