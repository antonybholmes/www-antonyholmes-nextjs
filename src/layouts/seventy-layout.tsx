import IChildrenProps from "../interfaces/children-props"
import MainSideLayout from "./main-side-layout"

interface IProps extends IChildrenProps {
  isRight?: boolean
  mainClassName?: string
  sideClassName?: string
  breakPoint?: string
  hideBreakPoint?: string
  autoHide?: boolean
}

function SeventyLayout({
  className,
  mainClassName,
  sideClassName,
  hideBreakPoint = "hidden 2xl:block",
  breakPoint = "2xl:grid-cols-10",
  autoHide,
  isRight,
  children,
}: IProps) {
  return (
    <MainSideLayout
      sideClassName={sideClassName}
      mainClassName={mainClassName}
      colspan="col-span-7"
      sideColspan="col-span-3"
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

export default SeventyLayout
