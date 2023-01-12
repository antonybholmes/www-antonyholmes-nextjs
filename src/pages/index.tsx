import BaseCol from "../components/base-col"
import HCenterCol from "../components/h-center-col"
import BaseLink from "../components/link/base-link"
import BlueButtonArrowLink from "../components/link/blue-button-arrow-link"
import BlueLink from "../components/link/blue-link"
import PostsPage from "../components/pages/posts-page"
import AvatarImageLarge from "../components/person/avatar-image-large"
import VCenterCol from "../components/v-center-col"
import VCenterRow from "../components/v-center-row"
import { EMAIL } from "../constants"
import EnvelopeIcon from "../icons/envelope"
import LinkIcon from "../icons/link"
import ContentLayout from "../layouts/content-layout"
import { getAuthorMap } from "../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPostsAndReviews,
  sortPosts,
} from "../lib/api/post"
import { getPageCount, getPagePosts } from "../lib/paginate"
import { getUrlFriendlyTag } from "../lib/tags"
import { getAuthorUrl } from "../lib/urls"

export default function Page({ author, posts }) {
  return (
    <ContentLayout title="Home" showCrumbs={false}>
      <></>
      <>
        <div className="grid grid-cols-1 gap-y-8 xl:grid-cols-2 xl:gap-x-12">
          <VCenterCol className="h-full items-center gap-y-8">
            <BaseLink
              href={getAuthorUrl("Antony Holmes")}
              ariaLabel="View profile"
            >
              <div className="relative z-10 overflow-hidden rounded-full">
                <AvatarImageLarge author={author} className="max-w-64" />
              </div>
            </BaseLink>
            <BaseCol className="gap-y-2">
              <VCenterRow className="group gap-x-2">
                <EnvelopeIcon className="w-4 fill-slate-500" />
                <BlueLink href={`mailto:${EMAIL}`}>{EMAIL}</BlueLink>
              </VCenterRow>
              <VCenterRow className="group  gap-x-2">
                <LinkIcon className="w-4 fill-slate-500" />
                <BlueLink href="https://github.com/antonybholmes">
                  github.com/antonybholmes
                </BlueLink>
              </VCenterRow>
            </BaseCol>
          </VCenterCol>

          <VCenterCol className="gap-y-16 bg-gradient-to-br from-slate-50 to-slate-100 p-8 xl:p-16">
            <HCenterCol className="gap-y-5 text-lg">
              <h1 className="text-5xl font-semibold">Hi There.</h1>

              <p className="text-center">
                I'm Antony Holmes, and welcome to my personal website.
              </p>

              <p className="text-center">
                That's me in the photo, posing by the Hudson River for no
                particular reason.
              </p>

              <p className="text-center">
                I'm a full stack developer and researcher in New York with
                experience using Java, Python, React, Gatsby, Next.js, Astro and
                other tech, some of which was used to make this very site.
              </p>

              <p className="text-center ">
                I have an aptly named publications page where you can view all
                of the scientific literature I have written, primarily focused
                on cancer genetics.
              </p>

              <p>My life story probably won't be optioned.</p>
            </HCenterCol>

            <VCenterRow className="justify-center font-semibold">
              <div className="flex flex-row gap-6">
                <BlueButtonArrowLink
                  href="/resume"
                  className="px-4 py-2"
                  text="Resume"
                />

                <BlueLink
                  href="/publications"
                  className="flex flex-row items-center "
                >
                  Publications
                </BlueLink>
              </div>
            </VCenterRow>
          </VCenterCol>
        </div>
        <section className="mt-16 border-t border-slate-200 pt-16">
          <PostsPage posts={posts} page={0} pages={1} />
        </section>
      </>
      <></>
    </ContentLayout>
  )
}

export async function getStaticProps() {
  const authorMap = getAuthorMap()

  const allPosts = sortPosts(getAllPostsAndReviews())
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPagePosts(allPosts, 0, 10))),
    authorMap
  )

  const author = authorMap[getUrlFriendlyTag("Antony Holmes")]

  return {
    props: {
      author,
      posts,
    },
  }
}
