import { ITitleLayoutProps } from "../interfaces/title-layout-props"
import ContentLayout from "./content-layout"

import SeventyLayout from "./seventy-layout"
import PageTitle from "../components/page-title"

interface IProps extends ITitleLayoutProps {
  sideClassName?: string
  footerClassName?: string
}

export default function SideLayout({
  title,
  showTitle = true,
  description,
  tab,
  isIndexed,
  crumbs,
  supertitle,
  sideClassName,
  className,
  footerClassName,
  children,
}: IProps) {
  return (
    <ContentLayout
      title={title}
      crumbs={crumbs}
      showTitle={false}
      description={description}
      tab={tab}
      isIndexed={isIndexed}
      className={className}
      footerClassName={footerClassName}
    >
      <></>
      <SeventyLayout className={sideClassName}>
        <>
          {showTitle && (
            <PageTitle
              title={title}
              subtitle={description}
              supertitle={supertitle}
              className="mb-8"
            />
          )}
          {children[0]}
        </>
        <>{children[1]}</>
      </SeventyLayout>
    </ContentLayout>
  )
}
