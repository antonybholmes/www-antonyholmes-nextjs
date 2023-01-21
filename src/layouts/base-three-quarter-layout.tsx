import CondComp from "../components/component"
import type ICrumbProps from "../interfaces/crumb-props"
import type ILayoutProps from "../interfaces/layout-props"
import cn from "../lib/class-names"
import LayoutTitles from "./layout-titles"

export interface IProps extends ILayoutProps, ICrumbProps {
  isRight?: boolean
}

export default function BaseThreeQuarterLayout({
  title,
  showTitle = false,
  superTitle,
  subTitle,
  tab,
  crumbs = [],
  isRight = true,
  className,
  children,
}: IProps) {
  return (
    <div
      className={cn("grid grid-cols-1 xl:grid-cols-4 xl:gap-x-16", className)}
    >
      {!isRight ? (
        <div className="relative col-span-1 hidden xl:block">{children[1]}</div>
      ) : (
        <></>
      )}
      <article className="col-span-3">
        <LayoutTitles
          title={title}
          superTitle={superTitle}
          subTitle={subTitle}
          crumbs={crumbs}
          showTitle={showTitle}
        />

        {children[0]}
      </article>
      <CondComp cond={isRight}>
        <div className="relative col-span-1 hidden xl:block">{children[1]}</div>
      </CondComp>
    </div>
  )
}
