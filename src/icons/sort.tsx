import type IIconProps from "../interfaces/icon-props"
import cn from "../lib/class-names"

interface IProps extends IIconProps {
  descending?: boolean
}

export default function SortIcon({ descending = true, className }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      {/* <path d="M 0,8 L 16,8" /> */}
      <path
        d="M 3,8 L 10,1 L 17,8 Z"
        className={cn([descending, "fill-gray-300", "fill-gray-900"])}
      />
      <path
        d="M 3,12 L 10,19 L 17,12 Z"
        className={cn([descending, "fill-gray-900", "fill-gray-300"])}
      />
    </svg>
  )
}
