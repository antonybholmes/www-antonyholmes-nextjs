import { ReactElement, useState } from 'react'
import ExpandButton from './expand-button'
import ExpandDetails from './expand-details'

interface IProps {
  isExpanded?: boolean
  className?: string
  children: ReactElement[]
}

const Expand = ({ isExpanded = true, className, children }: IProps) => {
  const [expanded, setExpanded] = useState(isExpanded)

  const _handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={className}>
      <ExpandButton expanded={expanded} onClick={_handleClick}>
        {children[0]}
      </ExpandButton>

      <ExpandDetails id="expand" expanded={expanded}>
        {children[1]}
      </ExpandDetails>
    </div>
  )
}

export default Expand
