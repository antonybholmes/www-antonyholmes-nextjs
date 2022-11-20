import { MouseEventHandler, useState } from "react"
import cn from "../lib/class-names"
import IChildrenProps from "../interfaces/children-props"
import ExpandDetails from "./expand-details"

interface IProps extends IChildrenProps {
  isExpanded?: boolean
}

const Expand = ({ isExpanded = true, className, children }: IProps) => {
  const [expanded, setExpanded] = useState(isExpanded)

  const handleClick: MouseEventHandler = e => {
    setExpanded(!expanded)
  }

  return (
    <div className={cn("box-shadow animate-shadow", className)}>
      {
        //@ts-ignore
        children[0]
      }

      <ExpandDetails expanded={expanded}>
        {
          // @ts-ignore
          children[1]
        }
      </ExpandDetails>
    </div>
  )
}

export default Expand
