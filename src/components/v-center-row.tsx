import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"
import BaseRow from "./base-row"

interface IProps extends IChildrenProps, IMouseProps {
  tabIndex?: number
  onKeyDown?: any
}

export default function VCenterRow({
  className = "",
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) {
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
