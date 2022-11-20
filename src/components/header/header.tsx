import { useEffect, useState } from "react"
import useWindowResize from "../../hooks/use-window-resize"
import IHeaderProps from "../../interfaces/header-props"
import cn from "../../lib/class-names"
import LargeHeader from "./large-header"
import MenuOverlay from "./menu-overlay"
import SmallHeader from "./small-header"

function Header({ title, tab, className, children }: IHeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
        // <div>working</div>
      )}

      <header
        className={cn(
          "transition-color sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur duration-300",
          [scrollY > 10, "border-gray-200", "border-transparent"],
          className
        )}
      >
        <SmallHeader
          title={title}
          tab={tab}
          onClick={onClick}
          showMenu={showMenu}
        >
          {children}
        </SmallHeader>

        <LargeHeader title={title} tab={tab}>
          {children}
        </LargeHeader>

        {/* {children && <div>{children}</div>} */}
      </header>
    </>
  )
}

export default Header
