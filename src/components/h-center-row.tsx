import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import BaseRow from "./base-row"

interface IProps extends IChildrenProps, IMouseProps {
  tag?: string
  tabIndex?: number
}

const HCenterRow = ({
  tag = "div",
  className,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      tag={tag}
      className={cn("justify-center", className)}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}

export default HCenterRow
