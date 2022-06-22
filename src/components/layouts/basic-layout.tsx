import React from 'react'
import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import Layout from './layout'

interface IProps {
  title: string
  description?: string
  tab?: string
  path?: string
  isIndexed?: boolean
  headerMode?: string
  className?: string
  children?: ReactNode
}

const BasicLayout = ({
  title,
  description,
  tab,
  path,
  isIndexed,
  headerMode = 'light',
  className,
  children,
}: IProps) => {
  return (
    <Layout
      title={title}
      description={description}
      tab={tab}
      path={path}
      isIndexed={isIndexed}
      headerMode={headerMode}
      className={className}
    >
      {children}
    </Layout>
  )
}

export default BasicLayout
