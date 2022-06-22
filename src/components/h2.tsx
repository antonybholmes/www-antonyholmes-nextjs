import { ReactNode } from 'react'
import cn from '../lib/class-names'

interface IProps {
  className?: string
  children?: ReactNode
}

const H2 = ({ className, children }: IProps) => (
  <h2 className={cn('uppercase font-light text-xl tracking-wider', className)}>
    {children}
  </h2>
)

export default H2
