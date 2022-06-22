import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const GreenAlert = ({ children }: IProps) => (
  <h3 className="text-center bg-emerald-200 text-emerald-600 px-8 py-4 rounded-md mt-8 mx-16">
    {children}
  </h3>
)

export default GreenAlert
