import type IIconProps from "../interfaces/icon-props"
import cn from "../lib/class-names"
import ChevronRightIcon from "./chevron-right"

interface IProps extends IIconProps {
  expanded: boolean
}

export default function ExpandIcon({ expanded, className }: IProps) {
  return (
    <ChevronRightIcon
      className={cn(
        "transition-ani transition-transform",
        [expanded, "rotate-90"],
        className
      )}
    />
  )
}
