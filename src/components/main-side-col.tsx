import { ReactElement } from "react"
import cn from "../lib/class-names"
import WrapRow from "./wrap-row"

interface IProps {
  className?: string
  cls1ext?: string
  cls2ext?: string
  isVCentered?: boolean
  children: ReactElement[]
}

const MainSideCol = ({ className, cls1ext, cls2ext, children }: IProps) => {
  return (
    <div
      className={cn("mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4", className)}
    >
      <div className={cn(`col-span-3`, cls1ext)}>{children[0]}</div>

      <div className={cls2ext}>{children[1]}</div>
    </div>
  )
}

export default MainSideCol
