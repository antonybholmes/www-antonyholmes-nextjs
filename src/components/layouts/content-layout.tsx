import React from 'react'
import { ReactNode } from 'react'
import PageTitle from '../page-title'
import ArticleLayout from './article-layout'

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

const ContentLayout = ({
  title,
  description,
  tab,
  path,
  isIndexed,
  className,
  children,
}: IProps) => {
  return (
    <ArticleLayout
      title={title}
      description={description}
      tab={tab}
      path={path}
      isIndexed={isIndexed}
      className={className}
    >
      <PageTitle title={title} subtitle={description} />
      {children}
    </ArticleLayout>
  )
}

export default ContentLayout
