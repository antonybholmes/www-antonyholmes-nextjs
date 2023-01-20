import Breadcrumb from "../components/breadcrumb"
import CondComp from "../components/component"
import PageTitle from "../components/page-title"
import type ICrumbProps from "../interfaces/crumb-props"
import type ILayoutProps from "../interfaces/layout-props"

export interface IProps extends ILayoutProps, ICrumbProps {}

export default function LayoutTitles({
  title,
  showTitle = false,
  showCrumbs = true,
  superTitle,
  subTitle,
  crumbs,
}: IProps) {
  return (
    <>
      <CondComp cond={showCrumbs}>
        {" "}
        <Breadcrumb crumbs={crumbs} className="mb-8" />
      </CondComp>

      <CondComp cond={showTitle}>
        <PageTitle
          title={title}
          subTitle={subTitle}
          superTitle={superTitle}
          className="mb-8"
        />
      </CondComp>
    </>
  )
}
