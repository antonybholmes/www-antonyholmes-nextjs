import { MouseEventHandler } from "react"

export default interface IMouseProps {
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler //(e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onMouseDown?: any //(e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onMouseUp?: any //(e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
