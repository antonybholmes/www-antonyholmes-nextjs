import { useState } from "react"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"
import AccordionButton from "./accordion-button"
import ExpandDetails from "./expand-details"

interface IProps extends IChildrenProps {
  title: string
  isExpanded?: boolean
  onClick?: (e: MouseEvent) => void
}

export default function Accordion({
  title,
  isExpanded = false,
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
      <AccordionButton isExpanded={status} onClick={_onClick}>
        {title}
      </AccordionButton>

      <ExpandDetails isExpanded={status}>
        <div className="px-4 py-2">{children}</div>
      </ExpandDetails>
    </div>
  )
}
