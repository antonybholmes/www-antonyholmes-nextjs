import IChildrenProps from "../interfaces/children-props"

interface IProps extends IChildrenProps {
  expanded: boolean
}

const ExpandDetails = ({ expanded = true, className, children }: IProps) => {
  return <div className={className}>{expanded && children}</div>
}

export default ExpandDetails
