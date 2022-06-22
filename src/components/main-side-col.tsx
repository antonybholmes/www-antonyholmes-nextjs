import { ReactElement } from 'react'
import cn from '../lib/class-names'
import WrapRow from './wrap-row'

interface IProps {
  className?: string
  cls1ext?: string
  cls2ext?: string
  isVCentered?: boolean
  children: ReactElement[]
}

const MainSideCol = ({ className, cls1ext, cls2ext, children }: IProps) => {
  return (
    <WrapRow className={className}>
      <div className={cn(`w-full 2xl:w-3/4`, cls1ext)}>{children[0]}</div>

      <div className={cn(`w-full 2xl:w-1/4`, cls2ext)}>{children[1]}</div>
    </WrapRow>
  )
}

export default MainSideCol
