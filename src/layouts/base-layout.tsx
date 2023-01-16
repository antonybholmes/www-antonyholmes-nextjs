import { ReactNode } from "react"
import Footer from "../components/footer"
import Header from "../components/header/header"
import Meta from "../components/meta"
import Seo from "../components/seo"

import ILayoutProps from "../interfaces/layout-props"
import cn from "../lib/class-names"

interface IProps extends ILayoutProps {
  headerChildren?: ReactNode
}

export default function BaseLayout({
  title,
  tab,
  className,
  headerMode,
  headerChildren,
  children,
}: IProps) {
  return (
    <>
      <Meta />
      <Seo title={title} />
      <Header title={title} tab={tab} headerMode={headerMode}>
        {headerChildren}
      </Header>

      <main className={cn("min-h-screen w-full", className)}>{children}</main>
      <Footer />
    </>
  )
}
