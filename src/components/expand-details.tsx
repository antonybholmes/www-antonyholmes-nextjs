import { gsap, Power3 } from "gsap"
import { useEffect, useRef } from "react"
import { ANIMATION_DURATION_S } from "../constants"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps {
  isExpanded: boolean
}

export default function ExpandDetails({
  isExpanded = true,
  className,
  children,
}: IProps) {
  const ref = useRef(null)
  const didMount = useRef(false)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        ref.current,
        {
          duration: ANIMATION_DURATION_S,
          height: isExpanded
            ? didMount.current
              ? `${ref.current.scrollHeight}px`
              : "auto"
            : 0,
          ease: Power3.easeOut,
        },
        0
      )
      .to(
        ref.current,
        {
          duration: ANIMATION_DURATION_S,
          opacity: isExpanded ? 1 : 0,
          ease: Power3.easeOut,
        },
        0
      )

    if (didMount.current) {
      didMount.current = true
    }
  }, [isExpanded])

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  )
}
