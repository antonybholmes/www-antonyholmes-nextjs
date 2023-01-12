import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps {}

export default function Title({ className, children }: IProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold capitalize lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  )
}
