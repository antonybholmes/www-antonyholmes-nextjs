import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"
import BaseRow from "./base-row"

interface IProps extends IChildrenProps, IMouseProps {
  tabIndex?: number
}

export default function HCenterRow({
  className,
  style,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) {
  return (
    <BaseRow
      className={cn("justify-center", className)}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}
