import BaseCol from "../components/base-col"
import ContentDiv from "../components/content-div"
import HCenterCol from "../components/h-center-col"
import HCenterRow from "../components/h-center-row"
import BaseLink from "../components/link/base-link"
import BlueButtonArrowLink from "../components/link/blue-button-arrow-link"
import BlueLink from "../components/link/blue-link"
import WhiteLink from "../components/link/white-link"
import PostsPage from "../components/pages/posts-page"
import AvatarImageLarge from "../components/person/avatar-image-large"
import VCenterCol from "../components/v-center-col"
import VCenterRow from "../components/v-center-row"
import { EMAIL, GITHUB_URL } from "../constants"
import EnvelopeIcon from "../icons/envelope"
import GitHubIcon from "../icons/github"
import BaseLayout from "../layouts/base-layout"
import ContentLayout from "../layouts/content-layout"
import { getAuthorMap } from "../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  sortPosts,
} from "../lib/api/post"
import { getPageCount, getPageItems } from "../lib/paginate"
import { getUrlFriendlyTag } from "../lib/tags"
import { getAuthorBaseUrl } from "../lib/urls"

export default function Page({ author, posts }) {
  return (
    <BaseLayout title="Home">
      <HCenterRow className="bg-gradient-to-br from-blue-700 to-blue-600 py-16  px-8 pt-32">
        <VCenterCol className="w-full gap-y-16 font-medium  text-white lg:w-1/2 xl:p-16">
          <HCenterCol className="gap-y-5 text-lg">
            <h1 className="text-6xl font-extrabold">Hi There.</h1>

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
              I have an aptly named publications page where you can view all of
              the scientific literature I have written, primarily focused on
              cancer genetics.
            </p>

            <p>My life story probably won't be optioned.</p>
          </HCenterCol>
        </VCenterCol>
      </HCenterRow>

      <HCenterRow className="py-32">
        <div className="grid w-3/4 grid-cols-1 gap-16 lg:grid-cols-2 xl:w-1/2">
          <VCenterCol className="items-center gap-y-8">
            <BaseLink
              href={getAuthorBaseUrl("Antony Holmes")}
              ariaLabel="View profile"
            >
              <div className="relative z-10 overflow-hidden">
                <AvatarImageLarge
                  author={author}
                  className="max-w-64 overflow-hidden"
                  imgClassName="trans-ani-300 scale-102 transition-transform hover:scale-105"
                />
              </div>
            </BaseLink>
          </VCenterCol>

          <VCenterCol className="items-center gap-y-16">
            <BaseCol className="gap-y-2 rounded-2xl border border-slate-100 p-16 shadow-xl">
              <VCenterRow className="group gap-x-2">
                <EnvelopeIcon className="w-4 fill-slate-500" />
                <BlueLink href={`mailto:${EMAIL}`}>{EMAIL}</BlueLink>
              </VCenterRow>
              <VCenterRow className="group gap-x-2">
                <GitHubIcon className="w-4 fill-slate-500" />
                <BlueLink href={GITHUB_URL}>github.com/antonybholmes</BlueLink>
              </VCenterRow>
            </BaseCol>

            <VCenterRow className="justify-center text-sm font-semibold">
              <div className="flex flex-row gap-6">
                <BlueButtonArrowLink
                  href="/resume"
                  className="px-4 py-2"
                  text="Resume"
                />

                <BlueLink
                  href="/publications"
                  className="flex flex-row items-center"
                >
                  Publications
                </BlueLink>
              </div>
            </VCenterRow>
          </VCenterCol>
        </div>
      </HCenterRow>

      <section className="bg-gradient-to-b from-slate-50 to-white pt-16 lg:pt-32">
        <ContentDiv>
          <></>
          <PostsPage posts={posts} page={0} pages={1} />
          <></>
        </ContentDiv>
      </section>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const authorMap = getAuthorMap()

  const allPosts = sortPosts(getAllPosts())
  const pages = getPageCount(allPosts)

  const posts = addAuthorsToPosts(
    await Promise.all(addExcerpts(getPageItems(allPosts, 0, 10))),
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
