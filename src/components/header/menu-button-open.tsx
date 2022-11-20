import { useEffect, useState } from "react"
import IMenuProps from "../../interfaces/menu-props"
import cn from "../../lib/class-names"
import { gsap } from "gsap"

const DURATION = 0.2

const LINE_STYLE = {
  height: "1px",
}

export interface IMenuButtonProps extends IMenuProps {
  headerMode?: string
}

function MenuOpenButton({
  showMenu,
  headerMode = "light",
  onClick,
}: IMenuButtonProps) {
  const [focus, setFocus] = useState(false)
  const [hover, setHover] = useState(false)
  //const [showMenu, setShowMenu] = useState(false)
  //const isFirstRun = useRef(true)

  useEffect(() => {
    animate()
  }, [showMenu])

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       "#l1",
  //       {
  //         duration: DURATION,
  //         backgroundColor: hover || focus ? toColor : fromColor,
  //       },
  //       0
  //     )
  //     .to(
  //       "#l3",
  //       {
  //         duration: DURATION,
  //         backgroundColor: hover || focus ? toColor : fromColor,
  //       },
  //       0
  //     )
  // }, [hover, focus])

  function animate() {
    if (showMenu) {
      // @ts-ignore
      gsap
        .timeline()
        .to(
          "#l1",
          {
            duration: DURATION,
            top: "2rem",
          },
          0
        )
        .to(
          "#l3",
          {
            duration: DURATION,
            top: "2rem",
          },
          0
        )
        .to(
          "#l1",
          {
            duration: DURATION,
            rotate: 45,
            transformOrigin: "50% 50%",
          },
          DURATION
        )
        .to(
          "#l3",
          {
            duration: DURATION,
            rotate: -45,
            transformOrigin: "50% 50%",
          },
          DURATION
        )
    } else {
      // @ts-ignore
      gsap
        .timeline()
        .to(
          "#l1",
          {
            duration: DURATION,
            rotate: 0,
            transformOrigin: "50% 50%",
          },
          0
        )
        .to(
          "#l3",
          {
            duration: DURATION,
            rotate: 0,
            transformOrigin: "50% 50%",
          },
          0
        )
        .to(
          "#l1",
          {
            duration: DURATION,
            top: "1.75rem",
          },
          DURATION
        )
        .to(
          "#l3",
          {
            duration: DURATION,
            top: "2.25rem",
          },
          DURATION
        )
    }
  }

  const fromColor =
    headerMode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.4)"
  const toColor =
    headerMode === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.8)"

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  function onFocus() {
    setFocus(true)
  }

  function onBlur() {
    setFocus(false)
  }

  const cls = "absolute left-5 w-5"
  const style = { ...LINE_STYLE, backgroundColor: fromColor }

  return (
    <button
      onClick={onClick}
      className="relative h-16 min-w-16 outline-none"
      aria-label={showMenu ? "Close Menu" : "Open Menu"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <span id="l1" className={cn(cls, "top-7")} style={style} />
      {/* <span
        id="line2"
        className="absolute"
        style={{
          ...LINE_STYLE,
          backgroundColor: fromColor,
          transform: 'translate(-50%, 0)',
        }}
      /> */}
      <span id="l3" className={cn(cls, "top-9")} style={style} />
    </button>
  )
}

export default MenuOpenButton
