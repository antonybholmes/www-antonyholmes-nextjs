import { useRef, useState } from "react"
import ChevronRightIcon from "../icons/chevron-right"

import cn from "../lib/class-names"

const CLASSES = `flex flex-row w-4 h-4 items-center justify-center`

interface IProps {
  expanded: boolean
  hover?: boolean
}

const ExpandArrow = ({ expanded, hover = false }: IProps) => {
  const [_hover, _setHover] = useState(false)
  const arrowEl = useRef(null)

  return (
    <div ref={arrowEl} className={CLASSES}>
      <ChevronRightIcon //{isExpanded ? "chevron-up" : "chevron-down"}
        className={cn(
          `w-2 transition-all duration-300 `,
          [expanded, "rotate-180", "rotate-0"],
          [hover || _hover, "fill-blue-400", "fill-slate-400"]
        )}
      />
    </div>
  )
}

export default ExpandArrow
