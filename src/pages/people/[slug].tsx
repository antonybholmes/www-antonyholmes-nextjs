import axios from "axios"
import { useEffect, useState } from "react"
import ContentDiv from "../../components/content-div"
import BaseCol from "../../components/base-col"
import BaseRow from "../../components/base-row"
import BlueButtonLink from "../../components/link/blue-button-link"
import MarkdownBody from "../../components/markdown-body"
import ContactInfo from "../../components/people/contact-info"
import PersonHeaderHoz from "../../components/people/person-header-hoz"
import PersonHeaderImage from "../../components/people/person-header-image"
import Publications from "../../components/publication/publications"
import PubMedLink from "../../components/publication/pubmed-link"
import VCenterCol from "../../components/v-center-col"
import QuoteStart from "../../icons/quote-start"
import IPerson from "../../interfaces/person"
import BaseLayout from "../../layouts/base-layout"
import SeventyLayout from "../../layouts/seventy-layout"
import { getAllPeople, getPersonBySlug } from "../../lib/api"
import getContextName from "../../lib/context-name"
import markdownToHtml from "../../lib/markdownToHtml"
import sortPublications from "../../lib/sort-publications"

const BASE_URL = "/api/publications/selected"

interface IProps {
  person: IPerson
}

export default function Page({ person }: IProps) {
  const [hover, setHover] = useState(false)
  const [publications, setPublications] = useState<any[]>([])

  function fetchData(person: IPerson) {
    axios
      .get(`${BASE_URL}/${person.frontmatter.personId}.json`)
      .then(res => {
        setPublications(sortPublications(res.data))
      })
      .catch(err => {
        //Do nothing console.log(err)
      })
  }

  useEffect(() => {
    fetchData(person)
  }, [])

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  const title = getContextName(person.titleMap).split(";")[0]

  //Request pub data
  //useEffect(() => {
  // axios
  //   .get(`/data/${person.frontmatter.personId}-selected-publications.json`)
  //   .then(res {
  //     // Since gatsby always seems to return an empty object, test if data is array
  //     if (Array.isArray(res.data)) {
  //       setPublications(sortPublications(res.data))
  //     } else {
  //       // try loading all pubs
  //       axios
  //         .get(`/data/${person.frontmatter.personId}-publications.json`)
  //         .then(res {
  //           if (Array.isArray(res.data)) {
  //             setPublications(sortPublications(res.data))
  //           }
  //         })
  //     }
  //   })
  //   .catch(err {
  //     axios
  //       .get(`/data/${person.frontmatter.personId}-publications.json`)
  //       .then(res {
  //         if (Array.isArray(res.data)) {
  //           setPublications(sortPublications(res.data))
  //         }
  //       })
  //   })

  // gsap.from("#header", {
  //   opacity: 0.5,
  //   duration: 1,
  //   scrollTrigger: { trigger: "#header" },
  // })

  // gsap.to("#headshot", {
  //   opacity: 1,
  //   duration: 5,
  //   scrollTrigger: { trigger: "#headshot" },
  // })
  //}, [])

  return (
    <BaseLayout title={person.frontmatter.name} tab="People" showTitle={false}>
      <ContentDiv className="py-16">
        <></>
        <VCenterCol className="gap-y-16">
          <SeventyLayout className="gap-y-8 2xl:gap-x-12" isRight={true}>
            <PersonHeaderHoz person={person} />
            <></>
          </SeventyLayout>
          <SeventyLayout className="gap-y-8 2xl:gap-x-12" isRight={true}>
            <VCenterCol className="gap-y-8 md:gap-y-12">
              <VCenterCol className="gap-y-4 rounded-2xl border border-gray-200 p-6 2xl:hidden">
                <h1 className="font-medium">Get In Touch</h1>

                <ContactInfo person={person} />

                {person.frontmatter.profile && (
                  <BaseRow>
                    <BlueButtonLink
                      href={person.frontmatter.profile}
                      className="mt-2 text-sm font-medium"
                      ariaLabel="View Columbia Profile"
                    >
                      Columbia Profile
                    </BlueButtonLink>
                  </BaseRow>
                )}
              </VCenterCol>

              <PersonHeaderImage person={person} />

              {person.html && (
                <BaseCol className="gap-y-4 rounded-2xl bg-apple-gray p-4 md:gap-y-8 md:p-8">
                  {/* <h1 className="text-3xl font-medium">Research</h1> */}

                  <QuoteStart className="w-8 fill-gray-900/20 lg:w-12" />
                  <MarkdownBody html={person.html} />
                  <BaseRow className="w-full justify-end">
                    <QuoteStart className="w-8 rotate-180 fill-gray-900/20 lg:w-12" />
                  </BaseRow>
                </BaseCol>
              )}

              {!person.frontmatter.groups.lab.includes("Admin") && (
                <div>
                  <h1 className="text-3xl">Selected Publications</h1>
                  {publications.length > 0 && (
                    <Publications
                      publications={publications.slice(0, 15)}
                      showAbstract={false}
                      showMoreButton={false}
                      showCount={true}
                    />
                  )}

                  <BaseCol className="mt-8 items-center gap-y-2">
                    <span>
                      {publications.length > 0
                        ? "See more on"
                        : "See all publications on"}
                    </span>
                    <PubMedLink person={person} />
                  </BaseCol>
                </div>
              )}
            </VCenterCol>
            <VCenterCol className="gap-y-4 rounded-2xl border border-gray-200 p-6">
              <h1 className="font-medium">Get In Touch</h1>

              <ContactInfo person={person} />

              {person.frontmatter.profile && (
                <BaseRow>
                  <BlueButtonLink
                    href={person.frontmatter.profile}
                    className="mt-2 text-sm font-medium"
                    ariaLabel="View Columbia Profile"
                  >
                    Columbia Profile
                  </BlueButtonLink>
                </BaseRow>
              )}
            </VCenterCol>
          </SeventyLayout>
        </VCenterCol>
        <></>
      </ContentDiv>
    </BaseLayout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const person = getPersonBySlug(`${params.slug}.md`)

  person.html = await markdownToHtml(person.content || "")

  // const file = join(
  //   PUBLICATIONS_DIR,
  //   `${person.frontmatter.personId}-selected-publications.json`
  // )

  // let allPublications = []

  // if (existsSync(file)) {
  //   allPublications = readJsonSync(file)
  // }

  return {
    props: {
      person,
    },
  }
}

export async function getStaticPaths() {
  const people = getAllPeople()

  return {
    paths: people.map(person => {
      return {
        params: {
          slug: person.frontmatter.personId,
        },
      }
    }),
    fallback: false,
  }
}
