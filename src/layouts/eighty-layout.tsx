import IChildrenProps from "../interfaces/children-props"
import MainSideLayout from "./main-side-layout"

interface IProps extends IChildrenProps {
  isRight?: boolean
  mainClassName?: string
  sideClassName?: string
  colspan?: string
  breakPoint?: string
  hideBreakPoint?: string
  autoHide?: boolean
}

function EightyLayout({
  className,
  mainClassName,
  sideClassName,
  colspan = "col-span-4",
  breakPoint = "2xl:grid-cols-5",
  hideBreakPoint = "hidden 2xl:block",
  autoHide,
  isRight,
  children,
}: IProps) {
  return (
    <MainSideLayout
      sideClassName={sideClassName}
      mainClassName={mainClassName}
      colspan={colspan}
      breakPoint={breakPoint}
      hideBreakPoint={hideBreakPoint}
      autoHide={autoHide}
      isRight={isRight}
      className={className}
    >
      {children}
    </MainSideLayout>
  )
}

export default EightyLayout
