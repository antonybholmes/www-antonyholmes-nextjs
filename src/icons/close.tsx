import IconProps from "../interfaces/icon-props"

const CloseIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
  >
    <path d="M 6,6 L 26,26" />
    <path d="M 6,26 L 26,6" />
  </svg>
)

export default CloseIcon
