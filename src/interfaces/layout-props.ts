import IChildrenProps from "./children-props"

export default interface ILayoutProps extends IChildrenProps {
  title: string
  supertitle?: string
  showTitle?: boolean
  description?: string
  tab?: string
  isIndexed?: boolean
  headerMode?: string
}
