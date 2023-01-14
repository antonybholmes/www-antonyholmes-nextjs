import CompactAvatars from "../components/person/compact-avatars"
import IPostAuthor from "../interfaces/post-author"
import ContentLayout from "../layouts/content-layout"
import { getAllAuthors } from "../lib/api/author"

export default function Page({ authors }) {
  return (
    <ContentLayout title="People" showTitle={false}>
      <></>
      <ul>
        {authors.map((author: IPostAuthor, index: number) => {
          return (
            <li key={index}>
              <CompactAvatars authors={authors} />
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
