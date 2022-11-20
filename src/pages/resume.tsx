import education from "../../_content/education.json"
import jobs from "../../_content/jobs.json"
import skills from "../../_content/skills.json"
import volunteer from "../../_content/volunteer.json"
import ContentDiv from "../components/content-div"
import BaseLayout from "../layouts/base-layout"
import { getAllPeople } from "../lib/api"

export default function Page() {
  const skillList: any[] = []

  skills.map((skillset: any, skillSetIndex: number) => {
    skillset.skills.map((skill: any, skillIndex: number) => {
      skillList.push(skill)
    })
  })

  return (
    <BaseLayout title="Resume" showTitle={false}>
      <></>
      <ContentDiv className="py-16">
        <></>
        <>
          <h2 className="text-center text-5xl font-bold">Skills</h2>

          <ul className="mt-16 grid grid-cols-1 gap-8 rounded-xl bg-white p-8 text-sm lg:grid-cols-4 xl:p-16">
            {skillList.map(skill => {
              return (
                <li className="p-4 text-center">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p>{skill.details}</p>
                </li>
              )
            })}
          </ul>
        </>
        <></>
      </ContentDiv>

      <ContentDiv className="py-16">
        <></>
        <>
          <h2 className="text-center text-5xl font-bold">Experience</h2>
          <ul className="mt-16 flex flex-col gap-y-16">
            {jobs.map((job, jobIndex) => (
              <li>
                <article className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                  <header>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <h4 className="font-normal">{job.company}</h4>
                    <h4 className="font-light">{job.date}</h4>
                  </header>
                  <div className="animate-shadow col-span-3 rounded-xl bg-white p-8">
                    <p>{job.overview}</p>
                    <ul className="ml-6 mt-4 list-disc">
                      {job.details.map((detail, detailIndex) => (
                        <li className="mb-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </>
        <></>
      </ContentDiv>

      <ContentDiv className="py-16">
        <></>
        <>
          <h2 className="text-center text-5xl font-bold">Volunteer Work</h2>
          <ul className="mt-16 flex flex-col gap-y-8">
            {volunteer.map((job, jobIndex) => (
              <li>
                <article className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                  <header>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <h4 className="font-normal">{job.company}</h4>
                    <h4 className="font-light">{job.date}</h4>
                  </header>
                  <div className="animate-shadow col-span-3 rounded-xl bg-white p-8">
                    <ul className="ml-6 flex list-disc flex-col gap-y-2">
                      {job.details.map((detail, detailIndex) => (
                        <li>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </>
        <></>
      </ContentDiv>

      <ContentDiv className="py-16">
        <></>
        <>
          <h2 className="text-center text-5xl font-bold">Education</h2>
          <ul className="animate-shadow mt-16 flex flex-col items-center gap-y-8 rounded-xl bg-white p-8 xl:p-16">
            {education.map((degree, degreeIndex) => (
              <li className="text-center">
                <header>
                  <h3 className="text-xl font-semibold">{degree.title}</h3>
                  {/* {degree.date !== '' && (
          <h3 className="degree-date">{degree.date}</h3>
          )} */}
                  <h4 className="font-light">{degree.school}</h4>
                </header>

                <ul className="mt-2 text-sm text-gray-500">
                  {degree.details.map((detail, detailIndex) => (
                    <li>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
        <></>
      </ContentDiv>
    </BaseLayout>
  )
}

export const getStaticProps = async () => {
  const allPeople = getAllPeople()

  return {
    props: { allPeople },
  }
}
