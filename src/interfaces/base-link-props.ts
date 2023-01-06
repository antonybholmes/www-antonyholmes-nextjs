import type IChildrenProps from "./children-props"

export default interface IBaseLinkProps extends IChildrenProps {
  href: string
  underline?: boolean
}
