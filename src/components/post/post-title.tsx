import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PostTitle = ({ children }: IProps) => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12">
    {children}
  </h1>
)

export default PostTitle
