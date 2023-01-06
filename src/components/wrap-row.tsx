import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import BaseRow from "./base-row"

const WrapRow = ({ className = "", children }: IChildrenProps) => (
  <BaseRow className={cn("flex-wrap", className)}>{children}</BaseRow>
)

export default WrapRow
