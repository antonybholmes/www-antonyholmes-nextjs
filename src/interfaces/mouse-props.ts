import { MouseEventHandler } from "react"

export default interface IMouseProps {
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}
