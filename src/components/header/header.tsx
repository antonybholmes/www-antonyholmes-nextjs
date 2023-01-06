//import Search from '../search/search'
import { useState } from "react"
import useScrollListener from "../../hooks/use-scroll-listener"
import useWindowResize from "../../hooks/use-window-resize"
import cn from "../../lib/class-names"
import IHeaderProps from "./header-props"
import LargeHeader from "./large-header"
import MenuOverlay from "./menu-overlay"
import SmallHeader from "./small-header"

function Header({ title, tab, headerMode = "light", className }: IHeaderProps) {
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
      {showMenu && (
        <MenuOverlay
          title={title}
          tab={tab}
          showMenu={showMenu}
          onClick={onClick}
        />
      )}

      <header
        className={cn(
          "transition-color fixed top-0 z-50 w-full border-b backdrop-blur duration-300",
          [headerMode === "light", "bg-white/80", "bg-slate-800/80"],
          [
            scrollY > 10,
            [headerMode === "light", "border-slate-200", "border-white/20"],
            "border-transparent",
          ],
          className
        )}
      >
        <SmallHeader
          title={title}
          tab={tab}
          showMenu={showMenu}
          headerMode={headerMode}
          onClick={onClick}
        />

        <LargeHeader
          title={title}
          tab={tab}
          showMenu={showMenu}
          headerMode={headerMode}
          scrollY={scrollY}
        />
      </header>
    </>
  )
}

export default Header
