import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps {
  isRight?: boolean
  mainClassName?: string
  sideClassName?: string
  colspan?: string
  sideColspan?: string
  breakPoint?: string
  hideBreakPoint?: string
  autoHide?: boolean
}

function MainSideLayout({
  className,
  mainClassName,
  sideClassName,
  colspan = "col-span-2",
  sideColspan = "col-span-1",
  breakPoint = "xl:grid-cols-2",
  hideBreakPoint = "hidden xl:block",
  autoHide = true,
  isRight = true,
  children,
}: IProps) {
  return (
    <div className={cn(`grid grid-cols-1`, breakPoint, className)}>
      {isRight ? (
        <>
          <article className={cn(colspan, mainClassName)}>
            {children[0]}
          </article>
          <div
            className={cn(
              sideColspan,
              [autoHide, hideBreakPoint],
              sideClassName
            )}
          >
            {children[1]}
          </div>
        </>
      ) : (
        <>
          <div
            className={cn(
              sideColspan,
              [autoHide, hideBreakPoint],
              sideClassName
            )}
          >
            {children[1]}
          </div>
          <article className={cn(colspan, mainClassName)}>
            {children[0]}
          </article>
        </>
      )}
    </div>
  )
}

export default MainSideLayout
