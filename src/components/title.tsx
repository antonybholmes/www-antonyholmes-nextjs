import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps {}

const Title = ({ className, children }: IProps) => (
  <h1
    className={cn("text-4xl font-extrabold capitalize lg:text-5xl", className)}
  >
    {children}
  </h1>
)

export default Title
