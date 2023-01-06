import IChildrenProps from "../interfaces/children-props"
import Expand from "./expand"

interface IProps extends IChildrenProps {
  title: string
  isExpanded?: boolean
}

const ExpandDiv = ({
  title,
  isExpanded = true,
  className,
  children,
}: IProps) => (
  <Expand isExpanded={isExpanded} className={className}>
    <h3 className="text-xl font-bold">{title}</h3>
    {children}
  </Expand>
)

export default ExpandDiv
