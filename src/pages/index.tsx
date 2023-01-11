import AvatarImageLarge from "../components/person/avatar-image-large"
import BaseCol from "../components/base-col"
import HCenterCol from "../components/h-center-col"
import BaseLink from "../components/link/base-link"
import BlueButtonArrowLink from "../components/link/blue-button-arrow-link"
import BlueLink from "../components/link/blue-link"
import ToBlueLink from "../components/link/to-blue-link"
import PostsPage from "../components/pages/posts-page"
import VCenterRow from "../components/v-center-row"
import { EMAIL } from "../constants"
import EnvelopeIcon from "../icons/envelope"
import LinkIcon from "../icons/link"
import ContentLayout from "../layouts/content-layout"
import { getAuthorMap } from "../lib/api/author"
import markdownToHtml from "../lib/markdown-html"
import { getAllPosts } from "../lib/api/post"
import { getAuthorUrl } from "../lib/urls"
import { getUrlFriendlyTag } from "../lib/tags"

export default function Page({ author, posts }) {
  return (
    <ContentLayout title="Home" showCrumbs={false}>
      <></>
      <div
        className="mb-32 grid grid-cols-1 gap-y-8 xl:grid-cols-4 xl:gap-x-16"
        slot="main"
      >
        <article className="rounded-xl bg-white p-8 xl:bg-transparent xl:p-0">
          <BaseCol className="items-center gap-y-8">
            <BaseLink
              href={getAuthorUrl("Antony Holmes")}
              ariaLabel="View profile"
            >
              <AvatarImageLarge
                author={author}
                lazy={false}
                className="max-w-64"
              />
            </BaseLink>
            <BaseCol className="gap-y-2 text-sm ">
              <VCenterRow className="group justify-center gap-x-2 xl:justify-start">
                <EnvelopeIcon className="transition-ani hidden w-4 fill-slate-400 transition-transform group-hover:-translate-x-0.5 xl:block" />
                <ToBlueLink href={`mailto:${EMAIL}`} underline={true}>
                  {EMAIL}
                </ToBlueLink>
              </VCenterRow>
              <VCenterRow className="group justify-center gap-x-2 xl:justify-start">
                <LinkIcon className="transition-ani hidden w-4 fill-slate-400 transition-transform group-hover:-translate-x-0.5 xl:block" />
                <ToBlueLink
                  href="https://github.com/antonybholmes"
                  underline={true}
                >
                  github.com/antonybholmes
                </ToBlueLink>
              </VCenterRow>
            </BaseCol>
          </BaseCol>
        </article>
        <section className="col-span-3">
          <section>
            <HCenterCol>
              <h1 className="inline-block text-5xl font-bold">Hi There.</h1>

              <p className="mt-4 text-lg">
                I'm Antony Holmes. Welcome to my personal web site.
              </p>

              <p className="mt-4 text-lg">
                I'm a researcher and full stack developer with experience using
                Java, Python, React, Next.js, Astro and other tech, some of
                which was used to make this very site.
              </p>

              <p className="mt-4 text-lg">
                I have an aptly named publications page where you can view all
                of the scientific literature I have written, primarily focused
                on cancer genetics.
              </p>
            </HCenterCol>

            <VCenterRow className="mt-8 justify-center">
              <div className="flex flex-row gap-6">
                <BlueButtonArrowLink
                  href="/resume"
                  className="px-4 py-2 text-sm font-bold"
                  text="Resume"
                />

                <BlueLink
                  href="/publications"
                  className="flex flex-row items-center text-sm"
                >
                  Publications
                </BlueLink>
              </div>
            </VCenterRow>
          </section>
          <section className="mt-16 border-t border-slate-200 pt-16">
            <PostsPage posts={posts} page={1} pages={1} />
          </section>
        </section>
      </div>
    </ContentLayout>
  )
}

export async function getStaticProps() {
  const authorMap = getAuthorMap()

  let posts = await Promise.all(
    getAllPosts(authorMap)
      .slice(0, 5)
      .map(async post => {
        return {
          ...post,
          excerpt: await markdownToHtml(post.frontmatter.rawExcerpt || ""),
          //html : await markdownHtml(post.frontmatter.content || ''),
        }
      })
  )

  const author = authorMap[getUrlFriendlyTag("Antony Holmes")]

  return {
    props: {
      author,
      posts,
    },
  }
}
