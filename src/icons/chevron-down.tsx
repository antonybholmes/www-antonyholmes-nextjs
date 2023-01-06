import IconProps from "../interfaces/icon-props"

const ChevronDownIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
    style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
  >
    {/* <path d="M 0,8 L 16,8" /> */}
    <path d="M 2,5 L 8,11 L 14,5" />
  </svg>
)

export default ChevronDownIcon
