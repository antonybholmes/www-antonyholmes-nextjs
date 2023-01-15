import IconProps from "../interfaces/icon-props"

export default function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      <path d="M 4,4 L 12,12" />
      <path d="M 4,12 L 12,4" />
    </svg>
  )
}
