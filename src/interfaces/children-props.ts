import { ReactNode } from "react"
import IClassProps from "./class-props"

export default interface IChildrenProps extends IClassProps {
  children?: ReactNode
}
