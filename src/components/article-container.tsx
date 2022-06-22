import { ReactNode } from 'react'
import ArticleDiv from './article-div'
import IStyleMap from '../types/style-map'
import HCenterRow from './h-center-row'

interface IProps {
  className?: string
  style?: IStyleMap
  children?: ReactNode
}

const ArticleContainer = ({ className, style, children }: IProps) => (
  <HCenterRow className={className} style={style}>
    <ArticleDiv>{children}</ArticleDiv>
  </HCenterRow>
)

export default ArticleContainer
