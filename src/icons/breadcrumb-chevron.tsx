import type IIconProps from "../interfaces/icon-props"

export default function BreadcrumbChevronIcon({ className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <path d="M 6,1 L 11,8 L 6,15" />
    </svg>
  )
}
