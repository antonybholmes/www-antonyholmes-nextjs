import type IChildrenProps from "./children-props"
import ICrumbProps from "./crumb-props"

export default interface ILayoutProps extends ICrumbProps, IChildrenProps {
  title: string
  showTitle?: boolean
  subTitle?: string
  superTitle?: string
  tab?: string
  isIndexed?: boolean
  headerMode?: string
  headerChildren?: any
}
