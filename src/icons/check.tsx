import IconProps from "../interfaces/icon-props"

const CheckIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
    style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
  >
    <path d="M 4,8 L 7,11 L 12,5" />
  </svg>
)

export default CheckIcon
