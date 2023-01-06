import MarkdownLayout from "../layouts/markdown-layout"
import { getPageBySlug } from "../lib/api/page"
import markdownToHtml from "../lib/markdown-html"

interface IProps {
  html: string
}

export default function Page({ html }: IProps) {
  return <MarkdownLayout title="Privacy" html={html} />
}

export async function getStaticProps() {
  const post = getPageBySlug("terms")

  const html = await markdownToHtml(post.frontmatter.rawContent || "")

  return {
    props: { html },
  }
}
