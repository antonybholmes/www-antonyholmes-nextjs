import MarkdownLayout from "../layouts/markdown-layout"
import { getPageBySlug } from "../lib/api"
import markdownToHtml from "../lib/markdownToHtml"

interface IProps {
  html: string
}

export default function Page({ html }: IProps) {
  return <MarkdownLayout title="Privacy" html={html} />
}

export async function getStaticProps() {
  const post = getPageBySlug("privacy.md")

  const html = await markdownToHtml(post.content || "")

  return {
    props: { html },
  }
}
