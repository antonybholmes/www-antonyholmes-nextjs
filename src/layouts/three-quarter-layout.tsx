import type ICrumbProps from "../interfaces/crumb-props"
import type ILayoutProps from "../interfaces/layout-props"
import BaseThreeQuarterLayout from "./base-three-quarter-layout"
import ContentLayout from "./content-layout"

export interface IProps extends ILayoutProps, ICrumbProps {
  isRight?: boolean
}

export default function ThreeQuarterLayout({
  title,
  showTitle = false,
  superTitle,
  subTitle,
  tab,
  crumbs = [],
  isRight = true,
  className,
  headerChildren,
  children,
}: IProps) {
  return (
    <ContentLayout
      title={title}
      tab={tab}
      showTitle={false}
      headerChildren={headerChildren}
      className={className}
    >
      <></>

      <BaseThreeQuarterLayout
        title={title}
        tab={tab}
        isRight={isRight}
        crumbs={crumbs}
      >
        {children}
      </BaseThreeQuarterLayout>
    </ContentLayout>
  )
}
