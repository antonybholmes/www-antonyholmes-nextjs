import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const Sidebar = ({ children }: IProps) => {
  return (
    <div className=" 2xl:ml-8 pl-8 border-l border-transparent 2xl:hover:border-gray-200 animate-button">
      {children}
    </div>
  )
}

export default Sidebar
