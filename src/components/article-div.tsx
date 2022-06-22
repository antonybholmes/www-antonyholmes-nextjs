import { ReactNode } from 'react'
import cn from '../lib/class-names'

interface IProps {
  className?: string
  style?: any
  children?: ReactNode
}

const ArticleDiv = ({ className, style, children }: IProps) => (
  <div
    className={cn('w-11/12 2xl:w-10/12 3xl:w-6/10', className)}
    style={style}
  >
    {children}
  </div>
)

export default ArticleDiv
