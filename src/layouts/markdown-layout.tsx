import MarkdownBody from "../components/markdown-body"
import ILayoutProps from "../interfaces/layout-props"
import SideLayout from "./side-layout"

interface IProps extends ILayoutProps {
  title: string
  html: string
}

export default function MarkdownLayout({
  title,
  supertitle,
  html,
  tab,
}: IProps) {
  return (
    <SideLayout title={title} supertitle={supertitle} tab={tab} crumbs={[]}>
      <div>
        <MarkdownBody html={html} className="text-justify" />
      </div>
      <></>
    </SideLayout>
  )
}
