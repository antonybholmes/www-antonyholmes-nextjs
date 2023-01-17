import type IChildProps from "../interfaces/child-props"
import cn from "../lib/class-names"
import tw from "../lib/tw"
import HCenterRow from "./h-center-row"

export default function ContentDiv({
  className,
  style,
  children,
}: IChildProps) {
  return (
    <HCenterRow className={cn("px-6", className)} style={style}>
      <div>{children[0]}</div>
      <div
        className={tw({
          w: "full",
          lg: { w: "90/100" },
          "3xl": { w: "80/100" },
        })}
      >
        {children[1]}
      </div>
      <div>{children[2]}</div>
    </HCenterRow>
  )
}
