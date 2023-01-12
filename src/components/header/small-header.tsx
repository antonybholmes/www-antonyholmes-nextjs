import BaseLink from "../link/base-link"
import MenuOpenButton from "./menu-button-open"
//import Search from '../search/search'
import LogoIcon from "../../icons/logo-icon"
import VCenterRow from "../v-center-row"
import IHeaderProps from "./header-props"
import MenuOverlay, { IMenuOverlayProps } from "./menu-overlay"

interface IProps extends IHeaderProps, IMenuOverlayProps {}

export default function SmallHeader({
  title,
  tab,
  headerMode,
  showMenu,
  onClick,
}: IProps) {
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
        <VCenterRow>
          <MenuOpenButton
            onClick={onClick}
            showMenu={showMenu}
            headerMode={headerMode}
          />

          <BaseLink href="/" ariaLabel="Goto Homepage">
            <LogoIcon headerMode={headerMode} className="w-12" />
          </BaseLink>
        </VCenterRow>
      </nav>
    </>
  )
}
