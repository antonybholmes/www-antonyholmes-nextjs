import ContentDiv from "../components/content-div"
import HCenterCol from "../components/h-center-col"
import ArrowLink from "../components/link/arrow-link"
import BaseLink from "../components/link/base-link"
import BlueButtonLink from "../components/link/blue-button-link"
import { OUTLINE_CLS } from "../components/link/outline-rounded-button-link"
import { SECONDARY_BUTTON_CLS } from "../components/link/secondary-button-link"
import PostsPage from "../components/pages/posts-page"
import AvatarImageLarge from "../components/person/avatar-image-large"
import VCenterCol from "../components/v-center-col"
import VCenterRow from "../components/v-center-row"
import { EMAIL, GITHUB_URL } from "../constants"
import EnvelopeIcon from "../icons/envelope"
import GitHubIcon from "../icons/github"
import BaseLayout from "../layouts/base-layout"
import { getAuthorMap } from "../lib/api/author"
import {
  addAuthorsToPosts,
  addExcerpts,
  getAllPosts,
  sortPosts,
} from "../lib/api/post"
import cn from "../lib/class-names"
import { getPageCount, getPageItems } from "../lib/paginate"
import { getUrlFriendlyTag } from "../lib/tags"
import { getAuthorBaseUrl } from "../lib/urls"

export default function Page({ author, posts }) {
  return (
    <BaseLayout title="Home">
      <ContentDiv className="px-8 py-24">
        <></>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2">
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

            {/*<VCenterRow className="justify-center text-sm font-semibold">
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
            </VCenterRow>*/}
          </VCenterCol>

          <VCenterCol className="gap-y-16 font-medium xl:py-16">
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
                I have an aptly named publications page where you can view all
                of the scientific literature I have written, primarily focused
                on cancer genetics.
              </p>

              <p>My life story probably won't be optioned.</p>
            </HCenterCol>

            <div className="flex flex-col items-center justify-center gap-6  xl:flex-row">
              <BlueButtonLink
                href={`mailto:${EMAIL}`}
                className="w-full gap-x-2 rounded-lg border border-transparent fill-white px-4 py-2.5 font-semibold text-white lg:w-auto"
              >
                <EnvelopeIcon className="w-4" />
                <span>{EMAIL}</span>
              </BlueButtonLink>
              <ArrowLink
                href={GITHUB_URL}
                className={cn(
                  OUTLINE_CLS,
                  SECONDARY_BUTTON_CLS,
                  "w-full  rounded-lg stroke-slate-900 px-4 py-2.5 font-semibold shadow-lg lg:w-auto"
                )}
              >
                <VCenterRow className="gap-x-2">
                  <GitHubIcon className="w-4" />
                  <span>antonybholmes</span>
                </VCenterRow>
              </ArrowLink>
            </div>
          </VCenterCol>
        </div>
        <></>
      </ContentDiv>

      <section className="mt-16 bg-gradient-to-b from-slate-50 to-white pt-16 lg:pt-32">
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
