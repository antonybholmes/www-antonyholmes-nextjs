import PostBody from '../../components/post/post-body'
import PostHeader from '../../components/post/post-header'
import { getAllPosts, getSectionMap } from '../../lib/api/post'
import markdownHtml from '../../lib/markdown-html'
import IPost from '../../types/post'
import PostDetails from '../../components/post/post-details'
import { getAuthorMap } from '../../lib/api/author'
import ISlug from '../../types/slug'
import { getPostSlug, getSlugAsPath } from '../../lib/slug'
import { getTags } from '../../lib/tags'
import ArticleContainer from '../../components/article-container'
import RelatedPosts from '../../components/post/related-posts'
import BasicLayout from '../../components/layouts/basic-layout'
import IPreviewPost from '../../types/preview-post'
import SeventyLayout from '../../components/layouts/seventy-layout'

interface IProps {
  post: IPost
  relatedPosts: IPreviewPost[]
  readMorePosts: IPreviewPost[]
}

const Page = ({ post, relatedPosts, readMorePosts }: IProps) => (
  <BasicLayout title={post.fields.title} tab="Blog" headerMode="dark">
    <>
      <article>
        <PostHeader post={post} />

        <ArticleContainer className="mt-48">
          <SeventyLayout>
            <>
              <PostDetails post={post} className="block lg:hidden mb-8" />

              <PostBody content={post.html} className="mb-32" />
            </>
            <div className="sticky top-0 mb-32" style={{ top: '40px' }}>
              <PostDetails post={post} />
            </div>
          </SeventyLayout>
        </ArticleContainer>
      </article>

      {/* </ArticleContainer> */}
      {readMorePosts.length > 0 && (
        <ArticleContainer className="bg-gray-50 py-16 lg:py-24">
          <RelatedPosts posts={readMorePosts} title="Keep Reading" />
        </ArticleContainer>
      )}

      {relatedPosts.length > 0 && (
        <ArticleContainer className="bg-gray-50 py-16 lg:py-24">
          <RelatedPosts posts={relatedPosts} title="Related Posts" />
        </ArticleContainer>
      )}
    </>
  </BasicLayout>
)

export default Page

type Params = {
  params: {
    slug: ISlug
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const slug = getSlugAsPath(params.slug)

  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  const posts = getAllPosts([
    'title',
    'description',
    'slug',
    'author',
    'section',
    'tags',
    'related',
    'content',
    'hero',
  ])

  const sectionMap = getSectionMap(posts)

  let post: any = null
  let postIndex = -1

  Object.keys(sectionMap).every(section => {
    sectionMap[section].every((p, index) => {
      if (p.slug === slug) {
        post = p
        postIndex = index
        return false
      }

      return true
    })

    if (post !== null) {
      return false
    }

    return true
  })

  const author = authorMap[post.fields.author]

  post = {
    ...post,
    html: await markdownHtml(post.fields.content || ''),
    authors: [author],
  }

  const relatedTitles = getTags(post.fields.related)

  const relatedPosts = await Promise.all(
    posts
      .filter(p => relatedTitles.includes(p.fields.title))
      .map(async p => {
        return {
          ...p,
          excerpt: await markdownHtml(p.fields.excerpt || ''),
          authors: [author],
        }
      })
  )

  const readMorePosts = await Promise.all(
    sectionMap[post.fields.section].slice(postIndex + 1).map(async p => {
      return {
        ...p,
        excerpt: await markdownHtml(p.fields.excerpt || ''),
        authors: [author],
      }
    })
  )

  // let rmp

  // if (index === 0) {
  //   // first post so look 2 posts back
  //   rmp = [posts[1], posts[2]]
  // } else if (index == posts.length - 1) {
  //   // last post so look 2 posts ahead
  //   rmp = [posts[posts.length - 3], posts[posts.length - 2]]
  // } else {
  //   // pick the previous post and the next post
  //   rmp = [posts[index - 1], posts[index + 1]]
  // }

  return {
    props: {
      post: post,
      relatedPosts: relatedPosts,
      readMorePosts: readMorePosts,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  const paths = posts.map(post => {
    return {
      params: {
        slug: getPostSlug(post.slug),
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
