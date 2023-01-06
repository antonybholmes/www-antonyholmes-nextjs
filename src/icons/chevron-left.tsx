import IconProps from "../interfaces/icon-props"

const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
    style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
  >
    <path d="M 11,2 L 5,8 L 11,14" />
  </svg>
)

export default ChevronLeftIcon
