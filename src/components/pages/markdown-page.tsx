import IBasePage from "../../interfaces/base-page"
import ICrumbProps from "../../interfaces/crumb-props"
import MarkdownLayout from "../../layouts/markdown-layout"

export interface IMarkdownPageProps extends ICrumbProps {
  page: IBasePage
  html: string
}

export default function Page({ page, html, crumbs }: IMarkdownPageProps) {
  return (
    <MarkdownLayout
      title={page.frontmatter.title}
      html={html}
      crumbs={crumbs}
    />
  )
}
