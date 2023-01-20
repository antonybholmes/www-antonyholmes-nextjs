import Prism from "prismjs"

import "prismjs/components/prism-jsx.min"
import "prismjs/components/prism-typescript"
//import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js"
import { useEffect } from "react"
import readingTime from "reading-time"
import BaseCol from "../../components/base-col"
import ContentDiv from "../../components/content-div"
import MorePosts from "../../components/post/more-posts"
import PostBody from "../../components/post/post-body"
import PostDetailsHoz from "../../components/post/post-details-hoz"
import PostHeader from "../../components/post/post-header"
import PostSocialMedia from "../../components/post/post-social-media"
import PostSocialMediaVert from "../../components/post/post-social-media-vert"
import PostTags from "../../components/post/post-tags"
import ProsAndCons from "../../components/post/pros-and-cons"
import RelatedPosts from "../../components/post/related-posts"
import IAuthorPost from "../../interfaces/author-post"
import IBasePost from "../../interfaces/base-post"
import IReadingStats from "../../interfaces/IReadingStats"
import IPost from "../../interfaces/post"
import BaseLayout from "../../layouts/base-layout"
import PostLayout from "../../layouts/post-layout"
import { getAuthorMap } from "../../lib/api/author"
import {
  addAuthors,
  addExcerpt,
  addHtml,
  getAllPosts,
  getPostBySlug,
} from "../../lib/api/post"
interface IProps {
  post: IPost
  morePosts?: IAuthorPost[]
  readMorePosts?: IAuthorPost[]
  stats: IReadingStats
}

export default function Page({
  post,
  stats,
  morePosts = [],
  readMorePosts = [],
}: IProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <BaseLayout title={post.frontmatter.title} tab="Blog" headerMode="dark">
      <>
        <article>
          <PostHeader post={post} />

          <ContentDiv className="my-40">
            <></>
            <BaseCol className="gap-y-4 lg:gap-y-8">
              <PostDetailsHoz post={post} stats={stats} />

              <PostSocialMedia post={post} className="lg:hidden" />

              <PostLayout>
                <PostSocialMediaVert post={post} />

                <BaseCol className="gap-y-8">
                  {post.frontmatter.type === "review" ? (
                    <ProsAndCons post={post} />
                  ) : (
                    <></>
                  )}

                  <PostBody html={post.html} className="text-justify" />
                  <PostTags post={post} />
                </BaseCol>

                <div>
                  {morePosts.length > 0 ? (
                    <MorePosts
                      posts={morePosts}
                      title={`More on ${post.frontmatter.tags[0]}`}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </PostLayout>
            </BaseCol>
            <></>
          </ContentDiv>
        </article>

        {readMorePosts.length > 0 ? (
          <ContentDiv className="py-16">
            <></>
            <RelatedPosts posts={readMorePosts} title="Keep Reading" />
            <></>
          </ContentDiv>
        ) : (
          <></>
        )}
      </>
    </BaseLayout>
  )
}

interface Props {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Props) {
  const authorMap = getAuthorMap()

  //const tagMap = getTagPostMap(allPosts)

  const post = await addHtml(
    addAuthors(await addExcerpt(getPostBySlug(params.slug)), authorMap)
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
      stats: readingTime(post.frontmatter.rawContent),
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

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
