import type IIconProps from "../interfaces/icon-props"
import cn from "../lib/class-names"

interface IProps extends IIconProps {
  isPlus?: boolean
}

export default function PlusIcon({ isPlus = true, className, style }: IProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        ...{ strokeLinecap: "round", strokeLinejoin: "round" },
        ...style,
      }}
    >
      <path d="M 4,8 L 12,8" />

      <path
        d="M 4,8 L 12,8"
        className={cn("trans-ani-300 origin-center transition-transform", [
          isPlus,
          "-rotate-90",
        ])}
      />
    </svg>
  )
}
