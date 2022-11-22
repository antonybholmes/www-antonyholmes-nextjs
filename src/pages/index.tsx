
//import axios from "axios"
import AvatarImageLarge from "../components/avatar-image-large"
import BaseCol from "../components/base-col"
import HCenterCol from "../components/h-center-col"
import BlueButtonLink from "../components/link/blue-button-link"
import BlueLink from "../components/link/blue-link"
import ToBlueLink from "../components/link/to-blue-link"
import VCenterRow from "../components/v-center-row"
import { EMAIL } from "../constants"
import LinkIcon from "../icons/link"
import MailIcon from "../icons/mail"
import ContentLayout from "../layouts/content-layout"
import { getAllPosts, getPeopleMap } from "../lib/api"
import markdownToHtml from "../lib/markdownToHtml"

export default function Page({ author, allPosts }) {
  return (
    <ContentLayout title="Home" showTitle={false}>
      <></>
      <div className="grid grid-cols-1 gap-y-8 xl:grid-cols-4 xl:gap-x-8">
        <article className="rounded-xl bg-white p-8 xl:bg-transparent xl:p-0">
          <BaseCol className="items-center gap-y-8">
            <AvatarImageLarge author={author} />

            <BaseCol className="gap-y-2 text-sm ">
              <VCenterRow className="justify-center gap-x-2 xl:justify-start">
                <MailIcon className="hidden w-4 fill-gray-400 xl:block" />
                <ToBlueLink href={`mailto:${EMAIL}`} ariaLabel={""}>
                  {EMAIL}
                </ToBlueLink>
              </VCenterRow>
              <VCenterRow className="justify-center gap-x-2 xl:justify-start">
                <LinkIcon className="hidden w-4 fill-gray-400 xl:block" />
                <ToBlueLink
                  href="https://github.com/antonybholmes"
                  ariaLabel={""}
                >
                  github.com/antonybholmes
                </ToBlueLink>
              </VCenterRow>
            </BaseCol>
          </BaseCol>
        </article>
        <section className="col-span-3">
          <section>
            <HCenterCol className="rounded-xl bg-white p-8 text-center xl:p-16">
              <h1 className="inline-block text-5xl font-bold">Hi There.</h1>

              <p className="mt-4 text-lg">
                I&apos;m Antony Holmes. Welcome to my personal web site.
              </p>

              <p className="mt-4 text-lg">
                I&apos;m a full stack developer with experience using Java,
                Python, React, Astro, Svelte and other tech, some of which was
                used to make this very site.
              </p>

              <p className="mt-4 text-lg">
                I have an aptly named publication page where you can view all of
                the scientific literature I have written, primarily focused on
                cancer genetics.
              </p>
            </HCenterCol>

            <VCenterRow className="mt-8 justify-center">
              <div className="flex flex-row gap-6">
                <BlueButtonLink
                  href="/resume"
                  className="px-4 py-2 text-sm font-medium"
                  ariaLabel={""}
                >
                  Resume
                </BlueButtonLink>
                <BlueLink
                  href="/publications"
                  className="flex flex-row items-center text-sm"
                  ariaLabel="View my publications"
                  underline={true}
                >
                  Publications
                </BlueLink>
              </div>
            </VCenterRow>
          </section>
          {/* <section className="mt-16 pt-16 border-t border-gray-200">
        <PostsPage posts={allPosts} page={1} pages={1} showLatestPosts={true} />
      </section> */}
        </section>
      </div>
    </ContentLayout>
  )
}

export async function getStaticProps() {
  const authorMap = getPeopleMap()

  let allPosts = await Promise.all(
    getAllPosts()
      .slice(0, 5)
      .map(async post => {
        return {
          ...post,
          excerpt: await markdownToHtml(post.excerpt || ""),
          //html : await markdownHtml(post.frontmatter.content || ''),
        }
      })
  )

  const author = authorMap["Antony Holmes"]

  return {
    props: {
      author,
      allPosts,
    },
  }
}
