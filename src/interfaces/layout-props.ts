import type IChildrenProps from "./children-props"

export default interface ILayoutProps extends IChildrenProps {
  title: string
  showTitle?: boolean
  subTitle?: string
  superTitle?: string
  tab?: string
  isIndexed?: boolean
  headerMode?: string
  headerChildren?: any
}
