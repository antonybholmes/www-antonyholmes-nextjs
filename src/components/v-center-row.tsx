import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import BaseRow from "./base-row"

interface IProps extends IChildrenProps, IMouseProps {
  tag?: string
  tabIndex?: number
  onKeyDown?: any
}

const VCenterRow = ({
  tag = "div",
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
      tag={tag}
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
