import { format, parseISO } from "date-fns"
import INewsItem from "../../interfaces/news-item"
import MarkdownLayout from "../../layouts/markdown-layout"
import { getAllNewsItems, getNewsItemBySlug, NEWS_DIR } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

interface IProps {
  newsItem: INewsItem
}

export default function Page({ newsItem }: IProps) {
  return (
    <MarkdownLayout
      title={newsItem.frontmatter.title}
      supertitle={format(parseISO(newsItem.date), "LLLL d, yyyy")}
      tab="News"
      html={newsItem.html}
    />
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const newsItem = getNewsItemBySlug(`${params.slug}.md`, NEWS_DIR)

  newsItem.html = await markdownToHtml(newsItem.content || "")

  // const file = join(
  //   PUBLICATIONS_DIR,
  //   `${person.frontmatter.personId}-selected-publications.json`
  // )

  // let allPublications = []

  // if (existsSync(file)) {
  //   allPublications = readJsonSync(file)
  // }

  return {
    props: {
      newsItem,
    },
  }
}

export async function getStaticPaths() {
  const allNewsItems = getAllNewsItems()

  return {
    paths: allNewsItems.map(newsItem => {
      return {
        params: {
          slug: newsItem.slug,
        },
      }
    }),
    fallback: false,
  }
}
