import { gsap } from "gsap"
import {
  FocusEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"
import cn from "../../lib/class-names"
import IMenuProps from "./menu-props"

const DURATION = 0.2
const OFFSET = "4px"

const LINE_STYLE = {
  height: "1px",
}

export interface IMenuButtonProps extends IMenuProps {
  showMenu: boolean
  headerMode?: string
}

const MenuOpenButton = ({
  showMenu,
  headerMode = "light",
  onClick,
}: IMenuButtonProps) => {
  const [focus, setFocus] = useState(false)
  const [hover, setHover] = useState(false)
  const isFirstRun = useRef(true)

  //const t1 = useRef(null)
  //const t2 = useRef(null)

  const refl1 = useRef(null)
  const refl3 = useRef(null)

  // useEffect(() => {
  //   // @ts-ignore
  //   t1.current = gsap
  //     .timeline({ paused: true })
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         top: '2rem',
  //       },
  //       0
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: DURATION,
  //         top: '2rem',
  //       },
  //       0
  //     )
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         rotate: 45,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: DURATION,
  //         rotate: -45,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )

  //   // @ts-ignore
  //   t2.current = gsap
  //     .timeline({ paused: true })
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         rotate: 0,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: DURATION,
  //         rotate: 0,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         top: '1.75rem',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: 4,
  //         top: '2.25rem',
  //       },
  //       DURATION
  //     )
  // }, [])

  // useEffect(() => {

  //   if (isFirstRun.current) {
  //     isFirstRun.current = 2;
  //   }
  // }, [])

  useEffect(() => {
    //if (!isFirstRun.current) {
    animate()
    //}

    // skip first render since we only
    // want animations when user clicks,
    // not when react first injects variable.
    isFirstRun.current = false
  }, [showMenu])

  // useWindowResize(() => {
  //   animate()
  // })

  useEffect(() => {
    gsap
      .timeline()
      .to(
        refl1.current,
        {
          duration: DURATION,
          backgroundColor: hover || focus ? toColor : fromColor,
        },
        0
      )
      .to(
        refl3.current,
        {
          duration: DURATION,
          backgroundColor: hover || focus ? toColor : fromColor,
        },
        0
      )
  }, [hover, focus])

  const animate = () => {
    if (showMenu) {
      // @ts-ignore
      gsap
        .timeline()
        .to(
          refl1.current,
          {
            duration: DURATION,
            top: "2rem",
          },
          0
        )
        .to(
          refl3.current,
          {
            duration: DURATION,
            top: "2rem",
          },
          0
        )
        .to(
          refl1.current,
          {
            duration: DURATION,
            rotate: 45,
            transformOrigin: "50% 50%",
          },
          DURATION
        )
        .to(
          refl3.current,
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
          refl1.current,
          {
            duration: DURATION,
            rotate: 0,
            transformOrigin: "50% 50%",
          },
          0
        )
        .to(
          refl3.current,
          {
            duration: DURATION,
            rotate: 0,
            transformOrigin: "50% 50%",
          },
          0
        )
        .to(
          refl1.current,
          {
            duration: DURATION,
            top: "1.75rem",
          },
          DURATION
        )
        .to(
          refl3.current,
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

  const onMouseEnter: MouseEventHandler = e => {
    setHover(true)
  }

  const onMouseLeave: MouseEventHandler = e => {
    setHover(false)
  }

  const onFocus: FocusEventHandler = e => {
    setFocus(true)
  }

  const onBlur: FocusEventHandler = e => {
    setFocus(false)
  }

  const cls = "absolute left-5 w-5 "
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
      <span ref={refl1} className={cn(cls, "top-7")} style={style} />
      {/* <span
        id="line2"
        className="absolute"
        style={{
          ...LINE_STYLE,
          backgroundColor: fromColor,
          transform: 'translate(-50%, 0)',
        }}
      /> */}
      <span ref={refl3} className={cn(cls, "top-9")} style={style} />
    </button>
  )
}

export default MenuOpenButton
