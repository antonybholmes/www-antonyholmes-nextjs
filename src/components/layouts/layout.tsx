import Footer from './footer'
import Header from '../header/header'
import SEO from './seo'
import { ReactNode } from 'react'
import cn from '../../lib/class-names'

interface IProps {
  title: string
  description?: string
  tab?: string
  path?: string
  bg?: string
  isIndexed?: boolean
  wrapClassName?: string
  headerMode?: string
  className?: string
  children?: ReactNode
}

const Layout = ({
  title,
  description,
  tab,
  path,
  isIndexed,
  wrapClassName,
  headerMode = 'light',
  className,
  children,
}: IProps) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        url={path}
        isIndexed={isIndexed}
      />
      <div className={wrapClassName}>
        <Header title={title} tab={tab} headerMode={headerMode} />
        <main className={cn('w-full min-h-screen', className)}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
