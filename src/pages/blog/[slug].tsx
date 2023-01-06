import PostPage from "../../components/pages/post-page"
import IPost from "../../interfaces/post"
import IPreviewPost from "../../interfaces/preview-post"
import BaseLayout from "../../layouts/base-layout"
import { getAuthorMap } from "../../lib/api/author"
import {
  findPostBySlug,
  getAllPosts,
  getPostByPath,
  getPostBySlug,
  getTagMap,
} from "../../lib/api/post"
import markdownHtml from "../../lib/markdown-html"
import markdownToHtml from "../../lib/markdown-html"
interface IProps {
  post: IPost
}

export default function Page({ post }: IProps) {
  return (
    <BaseLayout title={post.frontmatter.title} tab="Blog" headerMode="dark">
      <PostPage post={post} />
    </BaseLayout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const authorMap = getAuthorMap()

  const allPosts = await Promise.all(
    getAllPosts(authorMap).map(async post => {
      return {
        ...post,
        excerpt: await markdownHtml(post.frontmatter.rawExcerpt || ""),
        //html: await markdownHtml(post.frontmatter.rawContent || ""),
      }
    })
  )

  const tagMap = getTagMap(allPosts)

  const p = getPostByPath(findPostBySlug(params.slug))

  const post = {
    ...p,
    html: await markdownToHtml(p.frontmatter.rawContent || ""),
    authors: p.frontmatter.authors.map(a => authorMap[a]),
  }

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
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(getAuthorMap())

  return {
    paths: posts.map((post: IPreviewPost) => {
      return {
        params: {
          slug: post.fields.slug,
        },
      }
    }),
    fallback: false,
  }
}
