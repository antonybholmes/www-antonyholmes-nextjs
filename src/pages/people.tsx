import { useRouter } from "next/router"
import CompactAvatars from "../components/person/compact-avatars"
import IPostAuthor from "../interfaces/post-author"
import ContentLayout from "../layouts/content-layout"
import { getAllAuthors } from "../lib/api/author"
import createCrumbs from "../lib/create-crumbs"

export default function Page({ authors }) {
  return (
    <ContentLayout
      title="People"
      showTitle={false}
      crumbs={createCrumbs(useRouter().asPath)}
    >
      <></>
      <ul>
        {authors.map((author: IPostAuthor, index: number) => {
          return (
            <li key={index}>
              <CompactAvatars authors={[author]} />
            </li>
          )
        })}
      </ul>
    </ContentLayout>
  )
}

export async function getStaticProps() {
  const authors = getAllAuthors()

  return {
    props: {
      authors,
    },
  }
}
