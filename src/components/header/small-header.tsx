import BaseLink from "../link/base-link"
import MenuOpenButton from "./menu-button-open"
//import Search from '../search/search'
import LogoIcon from "../../icons/logo-icon-com"
import HCenterRow from "../h-center-row"
import IHeaderProps from "./header-props"
import MenuOverlay, { IMenuOverlayProps } from "./menu-overlay"

interface IProps extends IHeaderProps, IMenuOverlayProps {}
function SmallHeader({ title, tab, headerMode, showMenu, onClick }: IProps) {
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
    <>
      {showMenu && (
        <MenuOverlay
          title={title}
          tab={tab}
          showMenu={showMenu}
          onClick={onClick}
        />
      )}
      <nav className="w-full md:hidden">
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
      </nav>
    </>
  )
}

export default SmallHeader
