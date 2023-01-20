import { ITitleLayoutProps } from "../interfaces/title-layout-props"
import ContentLayout from "./content-layout"

import SeventyLayout from "./seventy-layout"
import PageTitle from "../components/page-title"

interface IProps extends ITitleLayoutProps {
  sideClassName?: string
}

export default function SideLayout({
  title,
  showTitle = true,
  tab,
  isIndexed,
  crumbs,
  superTitle,
  subTitle,
  sideClassName,
  className,
  children,
}: IProps) {
  return (
    <ContentLayout
      title={title}
      crumbs={crumbs}
      showTitle={false}
      superTitle={superTitle}
      tab={tab}
      isIndexed={isIndexed}
      className={className}
    >
      <></>
      <SeventyLayout className={sideClassName}>
        <>
          {showTitle ? (
            <PageTitle
              title={title}
              subTitle={subTitle}
              superTitle={superTitle}
              className="mb-8"
            />
          ) : (
            <></>
          )}
          {children[0]}
        </>
        <>{children[1]}</>
      </SeventyLayout>
    </ContentLayout>
  )
}
