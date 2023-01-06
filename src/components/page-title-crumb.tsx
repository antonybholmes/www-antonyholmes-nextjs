import ICrumbProps from "../interfaces/crumb-props"
import IPageTitleProps from "../interfaces/page-title-props"
import BaseCol from "./base-col"
import Breadcrumb from "./breadcrumb"
import PageTitle from "./page-title"

interface IProps extends IPageTitleProps, ICrumbProps {
  url: string
}

const PageTitleCrumb = ({ title, supertitle, subtitle, crumbs, url }: IProps) =>
  title || crumbs ? (
    <BaseCol className="gap-y-2">
      {crumbs && <Breadcrumb crumbs={crumbs} url={url} />}
      {title && (
        <PageTitle title={title} subtitle={subtitle} supertitle={supertitle} />
      )}
    </BaseCol>
  ) : (
    <></>
  )

export default PageTitleCrumb
