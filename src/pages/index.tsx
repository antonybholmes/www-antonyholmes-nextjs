import { getAllPosts, getSectionMap } from '../lib/api/post'
import { getAuthorMap } from '../lib/api/author'
import ArticleLayout from '../components/layouts/article-layout'
import { EMAIL, RECORDS_PER_PAGE } from '../constants'
import PostsPage from '../components/pages/posts-page'
import ISectionMap from '../types/section-map'
import IPreviewPost from '../types/preview-post'
import markdownHtml from '../lib/markdown-html'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToBlueLink from '../components/link/to-blue-link'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import IAuthor from '../types/author'
import AvatarImageLarge from '../components/avatar-image-large'
import HCenterCol from '../components/h-center-col'
import HCenterRow from '../components/h-center-row'
import BluePillButtonLink from '../components/link/blue-pill-button-link'
import SecondaryPillButtonLink from '../components/link/secondary-pill-button'

interface IProps {
  posts: IPreviewPost[]
  sectionMap: ISectionMap
  author: IAuthor
}

const Page = ({ posts, sectionMap, author }: IProps) => {
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  return (
    <ArticleLayout title="Home">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <article className="col-span-1">
          <AvatarImageLarge author={author} />

          <p className="mt-8">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 mr-2" />
            <ToBlueLink href={`mailto:${EMAIL}`}>{EMAIL}</ToBlueLink>
          </p>
          <p className="mt-2">
            <FontAwesomeIcon icon={faLink} className="w-8 mr-2" />
            <ToBlueLink href="https://github.com/antonybholmes">
              github.com/antonybholmes
            </ToBlueLink>
          </p>
        </article>
        <section className="col-span-3">
          <section className="">
            <HCenterCol className="py-16 bg-gray-800 rounded-lg p-8 text-white leading-relaxed text-center">
              <h1 className="text-6xl inline-block font-bold">Hi There.</h1>

              <p className="mt-8 text-xl">
                Hello, I&apos;m Antony Holmes. Welcome to my personal web site.
              </p>

              <p className="mt-8 text-xl">
                I&apos;m a full stack developer with experience using Java,
                Python, React and other tech, some of which were used to make
                this very site.
              </p>

              <p className="mt-8 text-xl">
                I have an aptly named publication page where you can view all of
                the scientific literature I have written, primarily focused on
                cancer genetics.
              </p>
            </HCenterCol>

            <HCenterRow className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <BluePillButtonLink
                  href={'/resume'}
                  className="px-6 py-3 font-semibold"
                >
                  Resume
                </BluePillButtonLink>
                <SecondaryPillButtonLink
                  href={'/publications'}
                  className="px-6 py-3 font-semibold"
                >
                  Publications
                </SecondaryPillButtonLink>
              </div>
            </HCenterRow>
          </section>

          <section className="mt-16 pt-16 border-t border-gray-200">
            <PostsPage
              posts={posts.slice(0, RECORDS_PER_PAGE)}
              page={1}
              pages={pages}
              showLatestPosts={true}
              sectionMap={sectionMap}
            />
          </section>
        </section>
      </div>
    </ArticleLayout>
  )
}

export default Page

export const getStaticProps = async () => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  // Get all the posts and add the authors in
  let posts = getAllPosts([
    'title',
    'description',
    'author',
    'section',
    'tags',
    'hero',
    'excerpt',
  ])

  //await generateSiteMap(posts)
  //await generateRSS(posts)

  posts = await Promise.all(
    posts.map(async post => {
      const excerpt = await markdownHtml(post.fields.excerpt || '')
      return {
        ...post,
        excerpt,
        authors: [authorMap[post.fields.author]],
      }
    })
  )

  return {
    props: {
      posts: posts,
      sectionMap: getSectionMap(posts),
      author: authorMap['Antony Holmes'],
    },
  }
}
