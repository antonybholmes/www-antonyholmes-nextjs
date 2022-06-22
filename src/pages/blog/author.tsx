import { getAllAuthors } from '../../lib/api/author'
import markdownHtml from '../../lib/markdown-html'
import IAuthor from '../../types/author'
import SideLayout from '../../components/layouts/side-layout'
import Avatar from '../../components/avatar'

interface IProps {
  authors: IAuthor[]
}

const Page = ({ authors }: IProps) => (
  <SideLayout title="Author">
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {authors.map((author, index) => {
          return (
            <li
              key={index}
              className="block col-span-1 border border-slate-200 rounded-lg overflow-hidden p-6"
            >
              <Avatar author={author} showTitle={true} />
            </li>
          )
        })}
      </ul>
    </>
    <></>
  </SideLayout>
)

export default Page

export const getStaticProps = async () => {
  const allAuthors = getAllAuthors([
    'id',
    'name',
    'title',
    'picture',
    'content',
    'slug',
  ])

  const authors = await Promise.all(
    allAuthors.map(async author => {
      return {
        ...author,
        html: await markdownHtml(author.fields.content || ''),
      }
    })
  )

  return {
    props: {
      authors: authors,
    },
  }
}
