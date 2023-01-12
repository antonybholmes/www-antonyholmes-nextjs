import PostPage from "../../components/pages/post-page"
import IBasePost from "../../interfaces/base-post"
import IPost from "../../interfaces/post"
import BaseLayout from "../../layouts/base-layout"
import { getAuthorMap } from "../../lib/api/author"
import {
  addAuthors,
  addExcerpt,
  addHtml,
  getAllPostsAndReviews,
} from "../../lib/api/post"
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

  const allPosts = getAllPostsAndReviews()

  //const tagMap = getTagPostMap(allPosts)

  const post = await addHtml(
    addAuthors(
      await addExcerpt(
        allPosts.filter(post => post.fields.slug === params.slug)[0]
      ),
      authorMap
    )
  )

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
  const posts = getAllPostsAndReviews()

  return {
    paths: posts.map((post: IBasePost) => {
      return {
        params: {
          slug: post.fields.slug,
        },
      }
    }),
    fallback: false,
  }
}
