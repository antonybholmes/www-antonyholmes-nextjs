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

const X1 = 22
const X2 = 42
const Y1 = 28
const Y2 = 36

const LINE_STYLE = {
  strokeWidth: 2,
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

  const animate = () => {
    if (showMenu) {
      // @ts-ignore
      gsap
        .timeline()
        .to(
          refl1.current,
          {
            duration: DURATION,
            attr: { y1: 32, y2: 32 },
          },
          0
        )
        .to(
          refl3.current,
          {
            duration: DURATION,
            attr: { y1: 32, y2: 32 },
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
            attr: { y1: Y1, y2: Y1 },
          },
          DURATION
        )
        .to(
          refl3.current,
          {
            duration: DURATION,
            attr: { y1: Y2, y2: Y2 },
          },
          DURATION
        )
    }
  }

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

  const cls = cn([
    headerMode === "dark",
    "stroke-white/80 group-hover:stroke-white",
    "stroke-slate-600 group-hover:stroke-slate-900",
  ])

  return (
    <button
      onClick={onClick}
      className="group relative h-16 min-w-16 outline-none"
      aria-label={showMenu ? "Close Menu" : "Open Menu"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {/* <span ref={refl1} className={cn(cls, "top-7")} style={style} />
      <span ref={refl3} className={cn(cls, "top-9")} style={style} /> */}

      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <line ref={refl1} x1={X1} y1={Y1} x2={X2} y2={Y1} className={cls} />
        <line ref={refl3} x1={X1} y1={Y2} x2={X2} y2={Y2} className={cls} />
      </svg>
    </button>
  )
}

export default MenuOpenButton
