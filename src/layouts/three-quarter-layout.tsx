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

export default function ThreeQuarterLayout({
  className,
  mainClassName,
  sideClassName,
  colspan = "col-span-3",
  breakPoint = "2xl:grid-cols-4",
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
