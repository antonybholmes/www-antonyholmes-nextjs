import BaseLink from "../link/base-link"
import MenuOpenButton from "./menu-button-open"
//import Search from '../search/search'
import LogoIcon from "../../icons/logo-icon"
import VCenterRow from "../v-center-row"
import IHeaderProps from "./header-props"
import { IMenuOverlayProps } from "./menu-overlay"

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
    <nav className="w-full xl:hidden">
      <VCenterRow>
        <MenuOpenButton
          onClick={onClick}
          showMenu={showMenu}
          headerMode={headerMode}
          style={{ marginBottom: "-1px" }}
        />

        <BaseLink href="/" ariaLabel="Goto Homepage">
          <LogoIcon headerMode={headerMode} style={{ marginBottom: "-1px" }} />
        </BaseLink>
      </VCenterRow>
    </nav>
  )
}
