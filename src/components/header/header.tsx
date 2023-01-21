import { useState } from "react"
import useScrollListener from "../../hooks/use-scroll-listener"
import useWindowResize from "../../hooks/use-window-resize"
import cn from "../../lib/class-names"
import IHeaderProps from "./header-props"
import LargeHeader from "./large-header"
import MenuOverlay from "./menu-overlay"

export default function Header({
  title,
  tab,
  headerMode = "light",
  className,
  children,
}: IHeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useScrollListener(handleScroll)

  useWindowResize(({ width, height }) => {
    // If larger than medium, auto close menu
    if (width > 800) {
      setShowMenu(false)
    }
  })

  function onClick() {
    setShowMenu(!showMenu) //toggleHeight()
  }

  return (
    <>
      <MenuOverlay
        title={title}
        tab={tab}
        showMenu={showMenu}
        onClick={onClick}
      />

      <header
        className={cn(
          "trans-ani-700 fixed top-0 z-50 block w-full py-3 backdrop-blur transition-all",
          [headerMode === "light", "bg-white/95", "bg-slate-800/95"],
          [
            scrollY > 10,
            [
              headerMode === "light",
              "border-slate-200 shadow-header",
              "border-white/20",
            ],
            "border-transparent",
          ],
          className
        )}
        style={{ marginTop: "-1px" }}
      >
        {/* <SmallHeader
          title={title}
          tab={tab}
          showMenu={showMenu}
          headerMode={headerMode}
          onClick={onClick}
        /> */}

        <LargeHeader
          title={title}
          tab={tab}
          headerMode={headerMode}
          scrollY={scrollY}
          showMenu={showMenu}
          onClick={onClick}
        >
          {children}
        </LargeHeader>
      </header>
    </>
  )
}
