import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import BaseRow from "./base-row"
import React from "react"

interface IProps extends IChildrenProps, IMouseProps {
  tabIndex?: number
  onKeyDown?: any
}

const VCenterRow = ({
  className = "",
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      className={cn("items-center", className)}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}

export default VCenterRow
