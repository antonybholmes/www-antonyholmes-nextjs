import type IIconProps from "../interfaces/icon-props"

export default function ChevronRightIcon({ className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <path d="M 3,1 L 7,5 L 3,9" />
    </svg>
  )
}
