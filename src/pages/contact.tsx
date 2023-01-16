import MarkdownPage, {
  IMarkdownPageProps,
} from "../components/pages/markdown-page"
import { getPageBySlug } from "../lib/api/page"
import markdownToHtml from "../lib/markdown-html"

export default function Page({ page, html }: IMarkdownPageProps) {
  return <MarkdownPage page={page} html={html} />
}

export async function getStaticProps() {
  const page = getPageBySlug("contact")

  const html = await markdownToHtml(page.frontmatter.rawContent || "")

  return {
    props: { page, html },
  }
}
