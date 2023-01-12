import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import BaseRow from "./base-row"

export default function WrapRow({ className = "", children }: IChildrenProps) {
  return <BaseRow className={cn("flex-wrap", className)}>{children}</BaseRow>
}
