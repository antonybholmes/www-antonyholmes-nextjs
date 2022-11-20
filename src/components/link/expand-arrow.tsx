import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import ChevronDownIcon from "../../icons/chevron-down"
import VCenterRow from "../v-center-row"

type ButtonProps = {
  isExpanded: boolean
  hover?: boolean
}

function ExpandArrow({ isExpanded, hover }: ButtonProps) {
  const [_hover, _setHover] = useState(false)
  const arrowEl = useRef(null)

  function animate() {
    gsap.killTweensOf(arrowEl.current)

    gsap.timeline().to(arrowEl.current, {
      duration: 0.5,
      rotation: `${isExpanded ? "180_ccw" : "0_cw"}`,
      transformOrigin: "50% 50%",
      ease: "power3.out",
    })
  }

  useEffect(() => {
    animate()
  }, [])

  useEffect(() => {
    animate()
  }, [isExpanded])

  function onMouseEnter(e: any) {
    _setHover(true)
  }

  function onMouseLeave(e: any) {
    _setHover(false)
  }

  return (
    <VCenterRow className="h-5 w-5 items-center">
      <div
        ref={arrowEl}
        className="flex h-full w-full flex-row items-center justify-center"
      >
        <ChevronDownIcon
          className={`color-ani w-4 ${
            hover || _hover ? "text-black" : "text-gray-300"
          }`}
        />
      </div>
    </VCenterRow>
  )
}

export default ExpandArrow
