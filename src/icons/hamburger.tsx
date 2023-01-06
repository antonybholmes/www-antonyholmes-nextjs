import IconProps from "../interfaces/icon-props"

const HamburgerIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M 4,10 L 28,10" id="line1" />
    {/* <path d="M 4,16 L 28,16" id="line2" /> */}
    <path d="M 4,22 L 28,22" id="line3" />
  </svg>
)

export default HamburgerIcon
