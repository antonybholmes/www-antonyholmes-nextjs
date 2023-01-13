import { useState } from "react"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"
import ExpandTabArrow from "./expand-tab-arrow"
import AnchorButton from "./link/anchor-button"

interface IProps extends IChildrenProps {
  expanded?: boolean
  onClick?: (e: MouseEvent) => void
}

export default function ExpandTabButton({
  expanded = false,
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
        "flex flex-row items-center justify-between cursor-pointer gap-x-2 font-bold transition transition-color hover:bg-slate-100 py-1 px-3 -mx-3 rounded",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{children}</div>
      <ExpandTabArrow expanded={expanded} hover={hover} />
    </AnchorButton>
  )
}
