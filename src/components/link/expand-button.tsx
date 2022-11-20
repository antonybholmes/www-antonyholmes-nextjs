import { useState } from "react"
import ExpandArrow from "./expand-arrow"

type ButtonProps = {
  isExpanded: boolean
  onClick?: any
  hover?: boolean
}

function ExpandButton({ isExpanded, onClick, hover }: ButtonProps) {
  const [_hover, _setHover] = useState(false)

  // useEffect(() => {
  //   gsap.timeline().to(
  //     arrowEl.current,
  //     {
  //       duration: 0.4,
  //       color: `${hover ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.3)"}`,
  //       ease: "power3.out",
  //     },
  //     0
  //   )
  // }, [hover])

  function toggle() {
    if (onClick !== null) {
      onClick(!isExpanded)
    }
  }

  function onMouseEnter(e: any) {
    _setHover(true)
  }

  function onMouseLeave(e: any) {
    _setHover(false)
  }

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={toggle}
    >
      <ExpandArrow isExpanded={isExpanded} hover={hover} />
    </button>
  )
}

ExpandButton.defaultProps = {
  onClick: null,
  hover: false,
}

export default ExpandButton
