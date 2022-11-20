import ContentDiv from "../components/content-div"
import BaseLayout from "../layouts/base-layout"

//import axios from "axios"
import BaseImage from "../components/base-image"
import BaseRow from "../components/base-row"
import HCenterRow from "../components/h-center-row"
import IndexPublications from "../components/publication/index-publications"
import BaseLink from "../components/link/base-link"
import BlueButtonLink from "../components/link/blue-button-link"
import VCenterCol from "../components/v-center-col"
import ContentLayout from "../layouts/content-layout"
import { getAllPosts, getPeopleMap } from "../lib/api"
import { getPagePosts } from "../lib/paginate"
import markdownToHtml from "../lib/markdownToHtml"
import BaseCol from "../components/base-col"
import AvatarImageLarge from "../components/avatar-image-large"
import VCenterRow from "../components/v-center-row"
import MailIcon from "../icons/mail"
import ToBlueLink from "../components/link/to-blue-link"
import { EMAIL } from "../constants"
import HCenterCol from "../components/h-center-col"
import BlueLink from "../components/link/blue-link"
import LinkIcon from "../icons/link"

export default function Page({author, allPosts}) {
  return (
    <ContentLayout title="Home" showTitle={false}>
      <></>
<div className="grid grid-cols-1 xl:grid-cols-4 gap-y-8 xl:gap-x-8">
    <article className="bg-white rounded-xl p-8 xl:p-0 xl:bg-transparent">
      <BaseCol className="items-center gap-y-8">
        <AvatarImageLarge author={author}  />

        <BaseCol className="gap-y-2 text-sm ">
          <VCenterRow className="gap-x-2 justify-center xl:justify-start">
            <MailIcon className="w-4 fill-gray-400 hidden xl:block" />
            <ToBlueLink href={`mailto:${EMAIL}`} ariaLabel={""}>{EMAIL}</ToBlueLink>
          </VCenterRow>
          <VCenterRow className="gap-x-2 justify-center xl:justify-start">
            <LinkIcon className="w-4 fill-gray-400 hidden xl:block" />
            <ToBlueLink href="https://github.com/antonybholmes" ariaLabel={""}>
              github.com/antonybholmes
            </ToBlueLink>
          </VCenterRow>
        </BaseCol>
      </BaseCol>
    </article>
    <section className="col-span-3">
      <section>
        <HCenterCol className="p-8 xl:p-16 text-center bg-white rounded-xl">
          <h1 className="text-5xl inline-block font-bold">Hi There.</h1>

          <p className="mt-4 text-lg">
            I&apos;m Antony Holmes. Welcome to my personal web site.
          </p>

          <p className="mt-4 text-lg">
            I&apos;m a full stack developer with experience using Java, Python,
            React, Astro, Svelte and other tech, some of which was used to make
            this very site.
          </p>

          <p className="mt-4 text-lg">
            I have an aptly named publication page where you can view all of the
            scientific literature I have written, primarily focused on cancer
            genetics.
          </p>
        </HCenterCol>

        <VCenterRow className="justify-center mt-8">
          <div className="flex flex-row gap-6">
            <BlueButtonLink
                  href="/resume"
                  className="px-4 py-2 font-medium text-sm" ariaLabel={""}            >
              Resume
            </BlueButtonLink>
            <BlueLink
                  href="/publications"
                  className="text-sm flex flex-row items-center" ariaLabel={""}            >
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
  getAllPosts().slice(0, 5).map(async post => {
    return {
      ...post,
      excerpt: await markdownToHtml(post.excerpt || ''),
      //html : await markdownHtml(post.frontmatter.content || ''),
    }
  })
)

const author = authorMap['Antony Holmes']

  return {
    props: {
      author,
      allPosts
    },
  }
}
