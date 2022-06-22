import { ReactElement } from 'react'
import BaseRow from '../base-row'

interface IProps {
  children: ReactElement[]
}

const SeventyLayout = ({ children }: IProps) => (
  <BaseRow>
    <article className="w-full lg:w-7/10">{children[0]}</article>
    <div className="hidden lg:block w-3/10 pl-8">{children[1]}</div>
  </BaseRow>
)

export default SeventyLayout
