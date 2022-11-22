import education from "../../_content/education.json"
import jobs from "../../_content/jobs.json"
import skills from "../../_content/skills.json"
import volunteer from "../../_content/volunteer.json"
import ContentDiv from "../components/content-div"
import BaseLayout from "../layouts/base-layout"
import ContentLayout from "../layouts/content-layout"
import ThreeQuarterLayout from "../layouts/three-quarter-layout"
import { getAllPeople } from "../lib/api"

export default function Page() {
  const skillList: any[] = []

  skills.map((skillset: any, skillSetIndex: number) => {
    skillset.skills.map((skill: any, skillIndex: number) => {
      skillList.push(skill)
    })
  })

  return (
    <ContentLayout title="Resume" showTitle={false}>
      <></>
      <>
      <ThreeQuarterLayout className="py-16 gap-x-32" isRight={false} autoHide={false}>

          

          <ul className="grid grid-cols-1 gap-8 rounded-xl bg-white text-sm lg:grid-cols-4">
            {skillList.map(skill => {
              return (
                <li className="p-4 text-center border border-gray-200 rounded-xl">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p>{skill.details}</p>
                </li>
              )
            })}
          </ul>
          <h2 className="text-4xl font-semibold mb-8">Skills</h2>
      </ThreeQuarterLayout>

      <ThreeQuarterLayout className="pt-16 gap-x-32" isRight={false} autoHide={false}>
  
          <ul className="flex flex-col gap-y-16">
            {jobs.map((job, jobIndex) => (
              <li>
                <article>
                  <header>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <h4 className="font-normal">{job.company}</h4>
                    <h4 className="font-light">{job.date}</h4>
                  </header>
                  <div className="mt-4">
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
          <h2 className="text-4xl font-semibold mb-8">Experience</h2>
      </ThreeQuarterLayout>

      <ThreeQuarterLayout className="pt-16 gap-x-32" isRight={false} autoHide={false}>
        <ul className="flex flex-col gap-y-16">
            {volunteer.map((job, jobIndex) => (
              <li>
                <article >
                  <header>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <h4 className="font-normal">{job.company}</h4>
                    <h4 className="font-light">{job.date}</h4>
                  </header>
                  <div className="mt-4">
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
          <h2 className="text-4xl font-semibold mb-8">Volunteer Work</h2>
      </ThreeQuarterLayout>

      <ThreeQuarterLayout className="pt-16 gap-x-32" isRight={false} autoHide={false}>
          
          <ul className="flex flex-col gap-y-8   ">
            {education.map((degree, degreeIndex) => (
              <li>
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
          <h2 className="text-4xl font-semibold mb-8">Education</h2>
          </ThreeQuarterLayout>
      </>
    </ContentLayout>
  )
}

export const getStaticProps = async () => {
  const allPeople = getAllPeople()

  return {
    props: { allPeople },
  }
}
