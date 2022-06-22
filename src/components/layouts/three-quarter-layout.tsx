import { ReactElement } from 'react'
import BaseRow from '../base-row'

interface IProps {
  children: ReactElement[]
}

const ThreeQuarterLayout = ({ children }: IProps) => (
  <BaseRow>
    <article className="w-full lg:w-3/4">{children[0]}</article>
    <div className="hidden lg:block w-1/4 pl-8">{children[1]}</div>
  </BaseRow>
)

export default ThreeQuarterLayout
