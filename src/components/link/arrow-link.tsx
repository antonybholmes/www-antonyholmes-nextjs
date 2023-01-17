import { useState } from "react"
import IndexArrow from "../../icons/index-arrow"
import type IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"
import { BUTTON_CLS } from "./button-link"

export const ARROW_CLS = "group gap-x-1"

export default function ArrowLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) {
  const [hover, setHover] = useState(false)

  // const iconEl

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       iconEl.current,
  //       { x: hover ? "0.15rem" : 0, ease: "power3.out", duration: 0.2 },
  //       0
  //     )
  // }, [hover])

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      underline={underline}
      className={cn(BUTTON_CLS, ARROW_CLS, className)}
    >
      {children}

      <IndexArrow selected={hover} className="w-4 stroke-2" />
    </BaseLink>
  )
}
