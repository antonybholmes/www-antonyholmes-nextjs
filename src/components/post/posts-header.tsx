import IChildrenProps from "../../interfaces/children-props"

const PostsHeader = ({ children }: IChildrenProps) => {
  return (
    <h2 className="mb-8 border-t-4 border-b border-t-slate-700 border-b-slate-300 py-2 text-xl font-bold">
      {children}
    </h2>
  )
}

export default PostsHeader
