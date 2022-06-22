import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Container = ({ children }: IProps) => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
