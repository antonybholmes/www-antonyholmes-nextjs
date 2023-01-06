import { useState } from "react"
import IndexArrow from "../../icons/index-arrow"
import type IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import { ARROW_CLS } from "./arrow-link"
import { COLOR_BUTTON_CLS } from "./color-button-link"
import PillButtonLink from "./pill-button-link"

const ARROW_BUTTON_CLS = "justify-between px-4 py-2"

export default function ArrowButtonLink({
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
    <PillButtonLink
      href={href}
      ariaLabel={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      underline={underline}
      className={cn(ARROW_CLS, ARROW_BUTTON_CLS, COLOR_BUTTON_CLS, className)}
    >
      <span>{children}</span>

      <IndexArrow selected={hover} className="w-4 stroke-2" />
    </PillButtonLink>
  )
}
