import { ReactElement } from 'react'
import cn from '../../lib/class-names'
import ExpandDiv from '../expand-div'

interface IProps {
  title: string
  className?: string
  children: ReactElement
}

const ReviewExpandDiv = ({ title, className, children }: IProps) => (
  <ExpandDiv
    title={title}
    className={cn(
      'border border-gray-200 mb-8 px-6 py-4 rounded-md',
      className
    )}
  >
    {children}
  </ExpandDiv>
)

export default ReviewExpandDiv
