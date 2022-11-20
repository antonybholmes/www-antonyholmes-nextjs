import { ReactNode } from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Meta from "../components/meta"
import Seo from "../components/seo"
import ILayoutProps from "../interfaces/layout-props"
import cn from "../lib/class-names"

interface IProps extends ILayoutProps {
  headerChildren?: ReactNode
  footerClassName?: string
}

export default function BaseLayout({
  title,
  tab,
  className,
  footerClassName,
  headerChildren,
  children,
}: IProps) {
  return (
    <>
      <Meta />
      <Seo title={title} />
      <Header title={title} tab={tab}>
        {headerChildren}
      </Header>

      <main className={cn("min-h-screen w-full", className)}>{children}</main>
      <Footer className={footerClassName} />
    </>
  )
}
