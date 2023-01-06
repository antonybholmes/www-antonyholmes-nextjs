import { useRef, useState } from "react"
import ChevronRightIcon from "../../icons/chevron-right"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

const IndexLink = ({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       iconEl.current,
  //       { x: hover ? '0.15rem' : 0, ease: 'power3.out', duration: 0.2 },
  //       0
  //     )
  // }, [hover])

  const _handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const _handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      underline={underline}
      className={cn("flex flex-row gap-x-1", className)}
    >
      {children}

      <div ref={iconEl}>
        <ChevronRightIcon
          className={cn("h-full w-3 transition-transform duration-200", [
            hover,
            "translate-x-1",
            "translate-x-0",
          ])}
        />
      </div>
    </BaseLink>
  )
}

export default IndexLink
