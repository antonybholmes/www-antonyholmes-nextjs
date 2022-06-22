import { ReactNode } from 'react'
import cn from '../lib/class-names'

interface IProps {
  className?: string
  style?: {}
  children: ReactNode
}

const DropShadowDiv = ({ className = '', style = {}, children }: IProps) => {
  return (
    <div
      className={cn('shadow-card p-8 rounded-xl overflow-hidden', className)}
      style={style}
    >
      {children}
    </div>
  )
}

export default DropShadowDiv
