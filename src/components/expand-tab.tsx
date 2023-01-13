import { MouseEventHandler, useState } from "react"
import IChildrenProps from "../interfaces/children-props"
import ExpandDetails from "./expand-details"
import ExpandTabButton from "./expand-tab-button"

interface IProps extends IChildrenProps {
  title: string
  isExpanded?: boolean
  onClick?: (e: MouseEvent) => void
}

export default function ExpandTab({
  title,
  isExpanded = true,
  className,
  children,
  onClick,
}: IProps) {
  const [expanded, setExpanded] = useState(isExpanded)

  function _onClick(e: MouseEvent) {
    if (onClick) {
      onClick(e)
    } else {
      setExpanded(!expanded)
    }
  }

  const status = onClick ? isExpanded : expanded

  return (
    <div className={className}>
      <ExpandTabButton expanded={status} onClick={_onClick}>
        {title}
      </ExpandTabButton>

      <ExpandDetails expanded={status}>{children}</ExpandDetails>
    </div>
  )
}
