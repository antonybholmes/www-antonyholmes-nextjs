import IconProps from "../interfaces/icon-props"

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
    style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
  >
    {/* <path d="M 0,8 L 16,8" /> */}
    <path d="M 2,11 L 8,5 L 14,11" />
  </svg>
)

export default ChevronUpIcon
