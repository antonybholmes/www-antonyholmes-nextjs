import { useRouter } from "next/router"
import Breadcrumb from "../components/breadcrumb"
import ContentDiv from "../components/content-div"
import PageTitle from "../components/page-title"
import type ICrumbProps from "../interfaces/crumb-props"
import type ILayoutProps from "../interfaces/layout-props"
import type IPageTitleProps from "../interfaces/page-title-props"
import createCrumbs from "../lib/create-crumbs"
import BaseLayout from "./base-layout"
import LayoutTitles from "./layout-titles"

export interface IProps extends ILayoutProps, ICrumbProps, IPageTitleProps {
  headerClassName?: string
}

export default function ContentLayout({
  title = "",
  subTitle,
  superTitle,
  showTitle = false,
  tab,
  isIndexed,
  headerClassName, //"text-white bg-card-blue lg:text-gray-900 lg:bg-white",
  crumbs,
  showCrumbs,
  className,
  headerChildren,
  children,
}: IProps) {
  if (!crumbs) {
    crumbs = createCrumbs(useRouter().asPath)
  }

  return (
    <BaseLayout
      title={title}
      tab={tab}
      isIndexed={isIndexed}
      className={className}
      headerChildren={headerChildren}
    >
      <ContentDiv className={headerClassName}>
        <></>
        <div className="mt-28">
          <LayoutTitles
            title={title}
            superTitle={superTitle}
            subTitle={subTitle}
            crumbs={crumbs}
            showTitle={showTitle}
            showCrumbs={showCrumbs}
          />

          {
            // @ts-ignore
            children[0]
          }
        </div>
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
