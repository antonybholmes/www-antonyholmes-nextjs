import { useState } from "react"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"
import ExpandTabArrow from "./expand-tab-arrow"
import AnchorButton from "./link/anchor-button"

interface IProps extends IChildrenProps {
  isExpanded?: boolean
  onClick?: (e: MouseEvent) => void
}

export default function AccordionButton({
  isExpanded = false,
  onClick,
  className,
  children,
}: IProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <AnchorButton
      onClick={onClick}
      className={cn(
        "transition-color flex cursor-pointer flex-row items-center justify-between gap-x-2 rounded-md p-3 font-semibold transition hover:bg-slate-100",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{children}</div>
      <ExpandTabArrow expanded={isExpanded} hover={hover} />
    </AnchorButton>
  )
}
