import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import ILink from "../../interfaces/link"

const DURATION = 0.5
const BAR_WIDTH = "3px"
export const LINK_CLS =
  "block relative font-bold text-sm  py-6 whitespace-nowrap overflow-hidden"

type IProps = {
  link: ILink
  selected: boolean
  scrollY: number
  headerMode?: string
}

const HeaderLink2 = ({
  link,
  selected,
  scrollY,
  headerMode = "light",
}: IProps) => {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)

  const isFirstRun = useRef(true)
  const t1 = useRef(null)
  const t2 = useRef(null)

  useEffect(() => {
    // @ts-ignore
    t1.current = gsap
      .timeline({ paused: true })
      .to(
        ref.current,
        {
          x: "-100%",
          width: "100%",
          duration: 0,
        },
        0
      )
      .to(
        ref.current,
        {
          x: 0,
          duration: DURATION,
          ease: "power3.out",
        },
        0
      )
      .to(
        ref.current,
        {
          x: 10,
          duration: DURATION,
          ease: "power3.out",
        },
        0.2
      )

      .to(
        ref.current,
        {
          x: 0,
          duration: DURATION,
          ease: "power3.out",
        },
        0.4
      )
      .to(
        ref.current,
        {
          width: "95%",
          duration: DURATION,
          ease: "power3.out",
        },
        0.5
      )
      .to(
        ref.current,
        {
          width: "100%",
          duration: DURATION,
          ease: "power3.out",
        },
        0.7
      )

    // @ts-ignore
    t2.current = gsap.timeline({ paused: true }).to(
      ref.current,
      {
        x: "110%",
        duration: DURATION,
        ease: "power3.out",
      },
      0
    )
  }, [])

  useEffect(() => {
    if (!isFirstRun.current) {
      if (hover) {
        // @ts-ignore
        t2.current.pause()
        // @ts-ignore
        t1.current.restart()
      } else {
        // @ts-ignore
        t1.current.pause()
        // @ts-ignore
        t2.current.restart()
      }
    }

    isFirstRun.current = false
  }, [hover])

  const handleMouseEnter = () => {
    if (!selected) {
      setHover(true)
    }
  }

  const handleMouseLeave = () => {
    if (!selected) {
      setHover(false)
    }
  }

  return (
    <BaseLink
      href={link.url}
      ariaLabel={`View ${link.name}`}
      className={cn(LINK_CLS, [
        selected,
        [headerMode === "dark", "text-slate-50", "text-blue-600"],
        [
          headerMode === "dark",
          "text-slate-400",
          "transition-color text-slate-900 duration-300",
        ],
      ])}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link.name}
      <div
        ref={ref}
        className={cn("transition-ani absolute bottom-0 transition-opacity", [
          selected,
          [
            "w-full",
            [scrollY > 10, "opacity-100", "opacity-0"],
            [headerMode === "light", "bg-blue-600", "bg-white"],
          ],
          "w-0 bg-slate-400",
        ])}
        style={{ height: BAR_WIDTH }}
      />
    </BaseLink>
  )
}

export default HeaderLink2
