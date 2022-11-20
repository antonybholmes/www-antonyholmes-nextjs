import ContentDiv from "../components/content-div"
import Breadcrumb from "../components/breadcrumb"
import PageTitle from "../components/page-title"
import ICrumbProps from "../interfaces/crumb-props"
import ILayoutProps from "../interfaces/layout-props"
import IPageTitleProps from "../interfaces/page-title-props"
import BaseLayout from "./base-layout"
import cn from "../lib/class-names"

export interface IProps extends ILayoutProps, ICrumbProps, IPageTitleProps {
  headerClassName?: string
  footerClassName?: string
}

export default function ContentLayout({
  title = "",
  description,
  supertitle,
  showTitle = true,
  tab,
  isIndexed,
  headerClassName, //"text-white bg-card-blue lg:text-gray-900 lg:bg-white",
  footerClassName,
  crumbs,
  className,
  children,
}: IProps) {
  return (
    <BaseLayout
      title={title}
      tab={tab}
      isIndexed={isIndexed}
      className={className}
      footerClassName={footerClassName}
    >
      <ContentDiv className={cn("mb-8", headerClassName)}>
        <></>
        <>
          {crumbs && <Breadcrumb crumbs={crumbs} className="mt-8" />}

          {showTitle && title !== "" && (
            <PageTitle
              title={title}
              subtitle={description}
              supertitle={supertitle}
              className="mt-8"
            />
          )}

          {
            // @ts-ignore
            children[0]
          }
        </>
        <></>
      </ContentDiv>
      <ContentDiv>
        <></>
        <>
          {
            // @ts-ignore
            children[1]
          }
        </>
        <></>
      </ContentDiv>
    </BaseLayout>
  )
}
