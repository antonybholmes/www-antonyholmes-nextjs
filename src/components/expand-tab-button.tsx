import { KeyboardEventHandler, MouseEventHandler, useState } from "react"
import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import ExpandTabArrow from "./expand-tab-arrow"
import VCenterRow from "./v-center-row"

interface IProps extends IChildrenProps {
  expanded?: boolean
  onClick?: MouseEventHandler
}

const ExpandTabButton = ({
  expanded = false,
  onClick,
  className,
  children,
}: IProps) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  const handleInput: KeyboardEventHandler = e => {
    //_setValue(e.target.value)

    if (e.key === "Enter" && onClick) {
      //@ts-ignore
      onClick(null)
    }
  }

  return (
    <VCenterRow
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleInput}
      className={cn(
        "cursor-pointer justify-between gap-x-2 py-2 font-bold",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{children}</div>
      <ExpandTabArrow expanded={expanded} hover={hover} />
    </VCenterRow>
  )
}

export default ExpandTabButton
