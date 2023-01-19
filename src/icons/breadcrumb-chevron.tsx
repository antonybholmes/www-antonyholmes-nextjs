import type IIconProps from "../interfaces/icon-props"

export default function BreadcrumbChevronIcon({ className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <path d="M 4,1 L 8,6 L 4,11" />
    </svg>
  )
}
