import { range } from "lodash"
import BaseRow from "../../components/base-row"
import HCenterRow from "../../components/h-center-row"
import PageTitle from "../../components/page-title"
import PostsPage from "../../components/pages/posts-page"
import AvatarImageLarge from "../../components/person/avatar-image-large"
import PostBody from "../../components/post/post-body"
import IAuthor from "../../interfaces/author"
import IPost from "../../interfaces/post"
import ContentLayout from "../../layouts/content-layout"
import { addAuthorHtml, getAuthorMap } from "../../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  getAuthorPostMap,
  sortPosts,
} from "../../lib/api/post"
import { getPageCount, getPageItems } from "../../lib/paginate"

interface IProps {
  author: IAuthor
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({ author, posts, page, pages }: IProps) {
  return (
    <ContentLayout title={author.frontmatter.name}>
      <></>
      <>
        <BaseRow className="gap-x-8">
          <div className="w-full">
            <HCenterRow className="mb-8 lg:hidden">
              <div>
                <AvatarImageLarge author={author} className="w-56" />
              </div>
            </HCenterRow>
            <PageTitle
              title={author.frontmatter.name}
              superTitle="Posts by"
              subTitle={author.frontmatter.title}
              className="text-center lg:text-left"
            />
            <PostBody html={author.html} className="mt-8" />
          </div>
          <div className="hidden lg:block ">
            <AvatarImageLarge author={author} className="w-64" />
          </div>
        </BaseRow>

        <section className="mt-16 border-t border-slate-200 pt-16">
          <PostsPage posts={posts} page={page} pages={pages} />
        </section>
      </>
      <></>
    </ContentLayout>
  )
}

interface Props {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Props) {
  const id = params.slug[0]

  const authorMap = getAuthorMap()

  const author = await addAuthorHtml(authorMap[id])

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = sortPosts(
    getAllPosts().filter(post =>
      post.frontmatter.authors.includes(author.frontmatter.name)
    )
  )

  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, page))),
    getAuthorMap()
  )

  return {
    props: { author, posts, page, pages },
  }
}

export async function getStaticPaths() {
  const authorMap = getAuthorMap()

  const posts = getAllPosts()

  const postMap = getAuthorPostMap(posts)

  const paths = []

  Object.keys(authorMap).forEach(author => {
    const authorPosts = postMap[author]
    const pages = getPageCount(authorPosts)

    paths.push({
      params: {
        slug: [author],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [author, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
