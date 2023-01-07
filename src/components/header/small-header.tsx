import BaseLink from "../link/base-link"
import MenuOpenButton from "./menu-button-open"
//import Search from '../search/search'
import type IChildrenProps from "../../interfaces/children-props"
import ContentDiv from "../content-div"
import HCenterRow from "../h-center-row"
import type { IMenuOverlayProps } from "./menu-overlay"
import LogoIcon from "../../icons/logo-icon"

export interface ISmallHeaderProps extends IMenuOverlayProps, IChildrenProps {
  showMenu: boolean
  onClick: any
}

function SmallHeader({
  showMenu,
  onClick,
  headerMode,
  children,
}: ISmallHeaderProps) {
  //const isFirstRun = useRef(true)

  // useEffect(() => {
  //   // @ts-ignore
  //   t1.current = gsap.timeline({ paused: true }).fromTo(
  //     ref.current,
  //     {
  //       height: "4rem",
  //     },
  //     {
  //       duration: 0.3,
  //       height: "20rem",
  //     },
  //     0
  //   )
  // }, [])

  // useEffect(() => {
  //   if (!isFirstRun.current) {
  //     if (showMenu) {
  //       // @ts-ignore
  //       t1.current.restart()
  //     } else {
  //       // @ts-ignore
  //       t1.current.reverse()
  //     }
  //   }

  //   isFirstRun.current = false
  // }, [showMenu])

  return (
    <nav className="w-full px-2 md:hidden">
      <div className="grid h-16 w-full grid-cols-5 items-center">
        <div>
          <MenuOpenButton
            onClick={onClick}
            showMenu={showMenu}
            headerMode={headerMode}
          />
        </div>

        <HCenterRow className="col-span-3 items-center">
          <BaseLink href="/" ariaLabel="Goto Homepage">
            <LogoIcon headerMode={headerMode} />
          </BaseLink>
        </HCenterRow>
        <div></div>
      </div>
      {children && (
        <ContentDiv>
          <></>
          <div className="mb-4">{children}</div>
          <></>
        </ContentDiv>
      )}
    </nav>
  )
}

export default SmallHeader
