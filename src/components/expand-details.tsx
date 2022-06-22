import { ReactNode } from 'react'
import AnimateHeight from 'react-animate-height'

interface IProps {
  id: string
  expanded: boolean
  className?: string
  children?: ReactNode
}

const ExpandDetails = ({ id, expanded, className, children }: IProps) => {
  return (
    <AnimateHeight
      id={id}
      duration={400}
      height={expanded ? 'auto' : 0} // see props documentation below
      className={className}
    >
      {children}
    </AnimateHeight>
  )
}

export default ExpandDetails
