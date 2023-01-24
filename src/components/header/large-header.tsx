import BaseLink from "../link/base-link"
//import Search from '../search/search'
import LogoIconSmall from "../../icons/logo-icon-small"
import ContentDiv from "../content-div"
import VCenterRow from "../v-center-row"
import HeaderLinks from "./header-links"
import IHeaderProps from "./header-props"
import MenuOpenButton from "./menu-button-open"
import { IMenuOverlayProps } from "./menu-overlay"
import useWindowResize from "../../hooks/use-window-resize"
import { useState } from "react"
import cn from "../../lib/class-names"

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
  const [showLinks, setShowLinks] = useState(false)

  useWindowResize(({ width, height }) => {
    setShowLinks(width > 768)
  })

  return (
    <ContentDiv className="py-3">
      <></>
      <nav className="h-full  items-center gap-x-1 grid grid-cols-2 2lg:grid-cols-3">
        <VCenterRow className="gap-x-4">
          <VCenterRow className="gap-x-2">
            <MenuOpenButton
              onClick={onClick}
              showMenu={showMenu}
              headerMode={headerMode}
              className="transition-opacity opacity-100 md:opacity-0 visible md:invisible"
            />
            {/* <span className="border-l border-slate-300 h-10 md:hidden" style={{width: "1px"}}/> */}
            <BaseLink href="/" ariaLabel="Goto Homepage">
              <LogoIconSmall
                headerMode={headerMode}
                className="transition-all ml-0 md:-ml-9"
              />
              {/* <LogoIcon headerMode={headerMode} className="hidden 3xl:block" /> */}
            </BaseLink>
          </VCenterRow>

          <HeaderLinks
            title={title}
            tab={tab}
            headerMode={headerMode}
            scrollY={scrollY}
            className={cn([
              showLinks,
              "overlay-show opacity-100 visible",
              "overlay-hide opacity-0 invisible",
            ])}
          />
        </VCenterRow>
        <div className="hidden md:block">{children && children}</div>
        {/* <div /> */}
      </nav>
      <></>
    </ContentDiv>
  )
}
