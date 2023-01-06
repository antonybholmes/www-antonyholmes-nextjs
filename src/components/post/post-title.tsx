import IChildrenProps from "../../interfaces/children-props"

const PostTitle = ({ children }: IChildrenProps) => (
  <h1 className="mb-12 text-4xl font-bold capitalize tracking-tighter md:text-5xl lg:text-6xl">
    {children}
  </h1>
)

export default PostTitle
