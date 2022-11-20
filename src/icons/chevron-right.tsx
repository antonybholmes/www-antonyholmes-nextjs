import IconProps from "../interfaces/icon-props"

export default function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <path d="M 5,2 L 11,8 L 5,14" />
    </svg>
  )
}
