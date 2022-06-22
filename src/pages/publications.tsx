import publications from '../../_content/publications.json'
import SideLayout from '../components/layouts/side-layout'
import ToBlueLink from '../components/link/to-blue-link'
import sortByDate from '../lib/sort-by-date'

const pubmedUrl = (pubmed: number) => {
  return `https://pubmed.ncbi.nlm.nih.gov/${pubmed}/`
}

const doiUrl = (doi: string) => {
  return `https://doi.org/${doi}`
}

const getUrl = (publication: any) => {
  if (publication.url !== '') {
    return publication.url
  } else if (publication.doi !== '') {
    return doiUrl(publication.doi)
  } else if (publication.pmid !== '') {
    return pubmedUrl(publication.pmid)
  } else {
    return ''
  }
}

const Page = () => {
  const publicationMap = sortByDate(publications)

  return (
    <SideLayout
      title="Publications"
      description="All the papers I've worked on"
    >
      <ul className="mt-8">
        {Array.from(publicationMap.keys())
          .sort()
          .reverse()
          .map((year: number, yearIndex: number) => (
            <li className="mb-8" key={yearIndex}>
              <h2 className="text-indigo-400 mb-1">{year}</h2>

              <ul>
                {publicationMap
                  .get(year)
                  .map((publication: any, pubIndex: number) => {
                    let url = getUrl(publication)

                    return (
                      <li className="pub-list-item" key={pubIndex}>
                        <h3 className="text-lg">
                          {url !== '' ? (
                            <ToBlueLink href={url}>
                              {publication.title}
                            </ToBlueLink>
                          ) : (
                            publication.title
                          )}
                        </h3>
                        <section className="pub-authors">
                          {publication.authors}
                        </section>
                        <section className="text-sm font-light">
                          {publication.journal}. {publication.year}.
                        </section>
                      </li>
                    )
                  })}
              </ul>
            </li>
          ))}
      </ul>
      <></>
    </SideLayout>
  )
}

export default Page
