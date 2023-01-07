import { gsap } from "gsap"
import { useEffect } from "react"
import cn from "../../lib/class-names"
import IHeaderProps from "./header-props"
import MenuOpenButton from "./menu-button-open"
import MenuLinks from "./menu-links"

const DURATION = 0.3

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
  let ref1: any
  let ref2: any

  useEffect(() => {
    // @ts-ignore
    gsap
      .timeline()
      .from(
        ref1,
        {
          duration: DURATION,
          opacity: 0,
        },
        0
      )
      .from(
        ref1,
        {
          x: "-1rem",
          duration: DURATION,
        },
        0
      )
  }, [])

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
    <div
      className={cn(
        "fixed left-0 top-0 z-100 flex h-screen w-full flex-row bg-black/20 font-bold backdrop-blur-sm"
      )}
    >
      <div ref={ref1} className="flex h-full min-w-2/3 flex-row px-2 bg-white">
        <MenuOpenButton showMenu={showMenu} onClick={onClick} />

        <div className="mt-2 mr-2 w-full">
          <MenuLinks title={title} tab={tab} onClick={onClick} />
        </div>
      </div>
      <div ref={ref2} onClick={onClick} className="h-full w-full"></div>
    </div>
  )
}
