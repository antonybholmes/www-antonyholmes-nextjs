import { ReactElement } from "react"
import IClassProps from "./class-props"

export default interface IChildProps extends IClassProps {
  children?: ReactElement[]
}
