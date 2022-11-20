import IChildProps from "../interfaces/child-props"
import cn from "../lib/class-names"

export default function ContentDiv({
  className,
  style,
  children,
}: IChildProps) {
  return (
    <div
      className={cn("grid w-full grid-cols-12 lg:grid-cols-8", className)}
      style={style}
    >
      <div>{children[0]}</div>
      <div className="col-span-10 lg:col-span-6">{children[1]}</div>
      <div>{children[2]}</div>
    </div>
  )
}
