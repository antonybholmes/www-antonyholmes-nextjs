import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import ArticleContainer from '../article-container'
import BasicLayout from './basic-layout'

interface IProps {
  title: string
  description?: string
  tab?: string
  path?: string
  isIndexed?: boolean
  header?: any
  className?: string
  children?: ReactNode
}

const ArticleLayout = ({
  title,
  description,
  tab,
  path,
  isIndexed,
  className,
  children,
}: IProps) => {
  return (
    <BasicLayout
      title={title}
      description={description}
      tab={tab}
      path={path}
      isIndexed={isIndexed}
      className={cn('pt-12', className)}
    >
      <ArticleContainer className="pb-12">{children}</ArticleContainer>
    </BasicLayout>
  )
}

export default ArticleLayout
