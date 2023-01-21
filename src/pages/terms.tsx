import { useRouter } from "next/router"
import MarkdownPage, {
  IMarkdownPageProps,
} from "../components/pages/markdown-page"
import { getPageBySlug } from "../lib/api/page"
import createCrumbs from "../lib/create-crumbs"
import markdownToHtml from "../lib/markdown-html"

export default function Page({ page, html }: IMarkdownPageProps) {
  return (
    <MarkdownPage
      page={page}
      html={html}
      crumbs={createCrumbs(useRouter().asPath)}
    />
  )
}

export async function getStaticProps() {
  const page = getPageBySlug("terms")

  const html = await markdownToHtml(page.frontmatter.rawContent || "")

  return {
    props: { page, html },
  }
}
