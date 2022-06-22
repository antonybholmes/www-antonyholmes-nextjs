import { ReactNode } from 'react'
import Container from '../container'
import FlHdDiv from '../flhddiv'
import Layout from './layout'

interface IProps {
  title?: string
  description?: string
  tab?: string
  path?: string
  isIndexed?: boolean
  children?: ReactNode
}

const PageLayout = ({
  title = '',
  description = '',
  tab = '',
  path = '',
  isIndexed,
  children,
}: IProps) => {
  return (
    <Layout
      title={title}
      description={description}
      tab={tab}
      path={path}
      isIndexed={isIndexed}
    >
      <FlHdDiv>
        <Container>{children}</Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PageLayout
