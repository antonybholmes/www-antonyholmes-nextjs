import { ReactNode } from 'react'
import cn from '../lib/class-names'

interface IProps {
  className?: string
  children?: ReactNode
}

const FlHdDiv = ({ className, children }: IProps) => (
  <div className={cn('w-full py-16 relative', className)}>{children}</div>
)

export default FlHdDiv
