import { ReactElement } from 'react'
import ContentLayout from './content-layout'
import ThreeQuarterLayout from './three-quarter-layout'

interface IProps {
  title: string
  description?: string
  tab?: string
  path?: string
  isIndexed?: boolean
  header?: any
  className?: string
  children: ReactElement[]
}

const SideLayout = ({
  title,
  description,
  tab,
  path,
  isIndexed,
  className,
  children,
}: IProps) => {
  return (
    <ContentLayout
      title={title}
      description={description}
      tab={tab}
      path={path}
      isIndexed={isIndexed}
      className={className}
    >
      <ThreeQuarterLayout>{children}</ThreeQuarterLayout>
    </ContentLayout>
  )
}

export default SideLayout
