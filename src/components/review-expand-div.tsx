import { ReactElement } from 'react'
import cn from '../lib/class-names'
import ExpandDiv from './expand-div'

interface IProps {
  title: string
  className?: string
  children: ReactElement
}

const ReviewExpandDiv = ({ title, className, children }: IProps) => (
  <ExpandDiv
    title={title}
    className={cn(
      'mb-8 rounded-2xl border border-gray-200 p-6',
      className
    )}
  >
    {children}
  </ExpandDiv>
)

export default ReviewExpandDiv
