import MarkdownBody from "../components/markdown-body"
import ILayoutProps from "../interfaces/layout-props"
import SideLayout from "./side-layout"

interface IProps extends ILayoutProps {
  title: string
  html: string
}

export default function MarkdownLayout({
  title,
  superTitle,
  html,
  tab,
  crumbs = [],
}: IProps) {
  return (
    <SideLayout title={title} superTitle={superTitle} tab={tab} crumbs={crumbs}>
      <div>
        <MarkdownBody html={html} className="text-justify" />
      </div>
      <></>
    </SideLayout>
  )
}
