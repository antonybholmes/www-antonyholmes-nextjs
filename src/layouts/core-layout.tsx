import Footer from "../components/footer/footer"
import ILayoutProps from "../interfaces/layout-props"
import cn from "../lib/class-names"

interface IProps extends ILayoutProps {}

function CoreLayout({ className, children }: IProps) {
  return (
    <>
      <main className={cn("min-h-screen w-full", className)}>{children}</main>
      <Footer />
    </>
  )
}

export default CoreLayout
