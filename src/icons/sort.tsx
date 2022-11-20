import IconProps from "../interfaces/icon-props"
import cn from "../lib/class-names"

interface IProps extends IconProps {
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
        d="M 2,8 L 10,0 L 18,8 Z"
        className={cn([descending, "fill-gray-300", "fill-blue-500"])}
      />
      <path
        d="M 2,12 L 10,20 L 18,12 Z"
        className={cn([descending, "fill-blue-500", "fill-gray-300"])}
      />
    </svg>
  )
}
