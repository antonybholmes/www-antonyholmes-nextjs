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
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const didMount = useRef(false)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        containerRef.current,
        {
          duration: ANIMATION_DURATION_S,
          height: isExpanded
            ? didMount.current
              ? `${containerRef.current.scrollHeight}px`
              : "auto"
            : 0,

          ease: Power3.easeOut,
        },
        0
      )
      // .to(
      //   containerRef.current,
      //   {
      //     duration: OPACITY_ANIMATION_S,
      //     opacity: isExpanded ? 1 : 0,
      //     ease: Power3.easeOut,
      //   },
      //   0
      // )
      .to(
        innerRef.current,
        {
          duration: ANIMATION_DURATION_S,
          y: isExpanded
            ? 0
            : didMount.current
            ? `-${containerRef.current.scrollHeight}px`
            : 0,
          ease: Power3.easeOut,
        },
        0
      )

    // .to(
    //   ref.current,
    //   {
    //     duration: OPACITY_ANIMATION_S,
    //     opacity: isExpanded ? 1 : 0,
    //     ease: Power3.easeOut,
    //   },
    //   0
    // )

    didMount.current = true
  }, [isExpanded])

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
