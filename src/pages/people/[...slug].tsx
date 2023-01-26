import { range } from "lodash"
import { useRouter } from "next/router"
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
import createCrumbs from "../../lib/create-crumbs"
import { getPageCount, getPageItems } from "../../lib/paginate"

interface IProps {
  person: IAuthor
  posts: IPost[]
  page: number
  pages: number
}

export default function Page({ person, posts, page, pages }: IProps) {
  return (
    <ContentLayout
      title={person.frontmatter.name}
      crumbs={createCrumbs(useRouter().asPath)}
    >
      <></>
      <>
        <BaseRow className="gap-x-8">
          <div className="w-full">
            <HCenterRow className="mb-8 lg:hidden">
              <div>
                {/* <AvatarImageLarge person={person} className="w-64 h-64" /> */}
              </div>
            </HCenterRow>
            <PageTitle
              title={person.frontmatter.name}
              superTitle="Posts by"
              subTitle={person.frontmatter.title}
              className="text-center lg:text-left"
            />
            <PostBody html={person.html} className="mt-8" />
          </div>
          <div className="hidden lg:block ">
            <AvatarImageLarge person={person} className="w-64 h-64" />
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

  const personMap = getAuthorMap()

  const person = await addAuthorHtml(personMap[id])

  const page =
    params.slug.length > 1
      ? parseInt(params.slug[params.slug.length - 1]) - 1
      : 0

  const allPosts = sortPosts(
    getAllPosts().filter(post =>
      post.frontmatter.authors.includes(person.frontmatter.name)
    )
  )

  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, page))),
    getAuthorMap()
  )

  return {
    props: { person, posts, page, pages },
  }
}

export async function getStaticPaths() {
  const personMap = getAuthorMap()

  const posts = getAllPosts()

  const postMap = getAuthorPostMap(posts)

  const paths = []

  Object.keys(personMap).forEach(person => {
    const personPosts = postMap[person]
    const pages = getPageCount(personPosts)

    paths.push({
      params: {
        slug: [person],
      },
    })

    range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [person, "page", (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
