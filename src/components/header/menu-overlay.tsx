import { animated, useSpring } from "@react-spring/web"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { ANIMATION_DURATION_S } from "../../constants"
import SmallLogoIcon from "../../icons/logo-icon-small"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"
import IHeaderProps from "./header-props"
import MenuOpenButton from "./menu-button-open"
import MenuLinks from "./menu-links"

//const ANIMATION_DURATION_S = 500

export interface IMenuOverlayProps extends IHeaderProps {
  showMenu: boolean
  onClick: any
}

export default function MenuOverlay({
  title,
  tab,
  showMenu,
  onClick,
}: IMenuOverlayProps) {
  const overlayRef = useRef(null)
  const sideMenuRef = useRef(null)

  const overlayStyle = useSpring({
    from: {
      opacity: showMenu ? 0 : 1,
      //visibility: showMenu ? "hidden" : "visible",
      width: showMenu ? "0%" : "100%",
    },
    to: {
      opacity: showMenu ? 1 : 0,
      //visibility: showMenu ? "visible" : "hidden",
      width: showMenu ? "100%" : "0%",
    },
  })

  const sideMenuStyle = useSpring({
    from: {
      //opacity: showMenu ? 0 : 1,
      x: showMenu ? "-2rem" : "0rem",
    },
    to: {
      //opacity: showMenu ? 1 : 0,
      x: showMenu ? "0rem" : "-2rem",
    },
  })

  useEffect(() => {
    animateMenu()
  }, [showMenu])

  function animateMenu() {
    if (showMenu) {
      // @ts-ignore
      gsap.timeline()
      // .set(
      //   overlayRef.current,
      //   {
      //     visibility: "visible",
      //   },
      //   0
      // )
      // .set(
      //   sideMenuRef.current,
      //   {
      //     visibility: "visible",
      //   },
      //   0
      // )
      // .to(
      //   overlayRef.current,
      //   {
      //     duration: ANIMATION_DURATION_S,
      //     opacity: 1,
      //   },
      //   0
      // )
      // .to(
      //   sideMenuRef.current,
      //   {
      //     duration: ANIMATION_DURATION_S,
      //     opacity: 1,
      //   },
      //   0
      // )
      // .to(
      //   sideMenuRef.current,
      //   {
      //     x: 0,
      //     duration: ANIMATION_DURATION_S,
      //   },
      //   0
      // )
    } else {
      gsap.timeline()
      // .to(
      //   overlayRef.current,
      //   {
      //     duration: ANIMATION_DURATION_S,
      //     opacity: 0,
      //   },
      //   0
      // )
      // .to(
      //   overlayRef.current,
      //   {
      //     duration: ANIMATION_DURATION_S,
      //     opacity: 0,
      //   },
      //   0
      // )
      // .to(
      //   sideMenuRef.current,
      //   {
      //     duration: ANIMATION_DURATION_S,
      //     opacity: 0,
      //   },
      //   0
      // )
      // .to(
      //   sideMenuRef.current,
      //   {
      //     x: "-4rem",
      //     duration: ANIMATION_DURATION_S,
      //   },
      //   0
      // )
      // .set(
      //   overlayRef.current,
      //   {
      //     visibility: "hidden",
      //     delay: ANIMATION_DURATION_S,
      //   },
      //   0
      // )
      // .set(
      //   sideMenuRef.current,
      //   {
      //     visibility: "hidden",
      //     delay: ANIMATION_DURATION_S,
      //   },
      //   0
      // )
    }
  }

  // useEffect(() => {
  //   if (!isFirstRun.current) {
  //     if (showMenu) {
  //       // @ts-ignore
  //       t2.current.pause()
  //       // @ts-ignore
  //       t1.current.restart()
  //     } else {
  //       // @ts-ignore
  //       t1.current.pause()
  //       // @ts-ignore
  //       t2.current.restart()
  //     }
  //   }

  //   isFirstRun.current = false
  // }, [showMenu])

  return (
    <animated.div
      //ref={overlayRef}
      className={cn(
        "fixed left-0 top-0 z-100 flex h-screen w-0 flex-row bg-black/70 backdrop-blur-sm overflow-hidden"
      )}
      style={overlayStyle}
    >
      <animated.div
        //ref={sideMenuRef}
        className="h-full w-72 bg-white"
        style={sideMenuStyle}
      >
        <VCenterRow className="gap-x-5 px-5 py-3">
          <MenuOpenButton showMenu={showMenu} onClick={onClick} />
          <div>
            <BaseLink href="/">
              <SmallLogoIcon className="shrink-0" />
            </BaseLink>
          </div>
        </VCenterRow>
        <MenuLinks title={title} tab={tab} onClick={onClick} className="grow" />
      </animated.div>
      <div onClick={onClick} className="h-full grow">
        {/* <HCenterRow>
          <MenuOpenButton
            showMenu={showMenu}
            onClick={onClick}
            headerMode="dark"
          />
        </HCenterRow>  */}
      </div>
    </animated.div>
  )
}
