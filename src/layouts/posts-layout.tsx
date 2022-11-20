import { format, parseISO } from "date-fns"
import BlueIndexLink from "../components/link/blue-index-link"
import ToBlueLink from "../components/link/to-blue-link"
import MarkdownBody from "../components/markdown-body"
import { RECORDS_PER_PAGE } from "../constants"
import IDataPageProps from "../interfaces/data-page-props"
import INewsItem from "../interfaces/news-item"
import SideLayout from "./side-layout"

interface IProps extends IDataPageProps {
  title: string
  posts: INewsItem[]
}

export default function PostsLayout({ title, posts }: IProps) {
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  return (
    <SideLayout title={title}>
      <ul className="mt-8 flex flex-col gap-y-8">
        {posts.map((post: any, index: number) => {
          const url = `/${title.toLowerCase()}/${post.slug}`
          return (
            <li
              key={index}
              className="color-ani block rounded-2xl border border-gray-200 p-6 lg:p-8"
            >
              <div className="text-sm">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </div>
              <ToBlueLink href={url} ariaLabel="View article">
                <h2 className="mt-2 text-2xl lg:text-3xl">
                  {post.frontmatter.title}
                </h2>
              </ToBlueLink>
              <MarkdownBody html={post.excerpt} className="mt-2" />
              <BlueIndexLink
                href={url}
                ariaLabel="View article"
                className="mt-2"
              >
                Read more
              </BlueIndexLink>
            </li>
          )
        })}
      </ul>
      <></>
    </SideLayout>
  )
}
