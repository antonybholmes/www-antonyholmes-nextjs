import { KeyboardEventHandler, MouseEventHandler, useState } from "react"
import IChildrenProps from "../interfaces/children-props"
import ExpandArrow from "./expand-arrow"
import VCenterRow from "./v-center-row"

interface IProps extends IChildrenProps {
  expanded?: boolean
  onClick?: MouseEventHandler
}

export default function ExpandButton({
  expanded = false,
  onClick,
  children,
}: IProps) {
  const [hover, setHover] = useState(false)

  const handleMouseEnter: MouseEventHandler = e => {
    setHover(true)
  }

  const handleMouseLeave: MouseEventHandler = e => {
    setHover(false)
  }

  const handleInput: KeyboardEventHandler = e => {
    //_setValue(e.target.value)

    if (e.key === "Enter" && onClick) {
      onClick(null)
    }
  }

  return (
    <VCenterRow
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleInput}
      className="cursor-pointer gap-x-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ExpandArrow expanded={expanded} hover={hover} />
      <div>{children}</div>
    </VCenterRow>
  )
}
