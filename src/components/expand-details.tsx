import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { ANIMATION_DURATION_S } from "../constants"
import IChildrenProps from "../interfaces/children-props"

interface IProps extends IChildrenProps {
  isExpanded: boolean
}

export default function ExpandDetails({
  isExpanded = true,
  className,
  children,
}: IProps) {
  const ref = useRef(null)

  useEffect(() => {
    console.log(isExpanded)
    gsap.timeline().to(
      ref.current,
      {
        duration: ANIMATION_DURATION_S,
        height: isExpanded
          ? `${ref.current ? ref.current.scrollHeight : 0}px`
          : 0,
        opacity: isExpanded ? 1 : 0,
      },
      0
    )
  }, [isExpanded])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
