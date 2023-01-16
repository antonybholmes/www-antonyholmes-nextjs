import IBasePage from "../../interfaces/base-page"
import MarkdownLayout from "../../layouts/markdown-layout"

export interface IMarkdownPageProps {
  page: IBasePage
  html: string
}

export default function Page({ page, html }: IMarkdownPageProps) {
  return <MarkdownLayout title={page.frontmatter.title} html={html} />
}
