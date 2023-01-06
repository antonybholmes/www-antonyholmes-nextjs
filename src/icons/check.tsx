import IconProps from "../interfaces/icon-props"

const CheckIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
    style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
  >
    <path d="M 4,18 L 12,26 L 28,6" />
  </svg>
)

export default CheckIcon
