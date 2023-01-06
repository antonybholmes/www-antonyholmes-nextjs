import education from "../../_content/education.json"
import jobs from "../../_content/jobs.json"
import skills from "../../_content/skills.json"
import volunteer from "../../_content/volunteer.json"
import ContentLayout from "../layouts/content-layout"
import { getAllAuthors } from "../lib/api/author"
import cn from "../lib/class-names"

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
      <div className="mb-32 flex flex-col gap-y-32">
        <div>
          <h2 className="text-center text-5xl font-bold">Skills</h2>

          <ul className="mt-16 grid grid-cols-1 gap-x-4 gap-y-4 rounded-xl bg-white text-sm md:grid-cols-3 xl:grid-cols-5">
            {skillList.map((skill, index) => {
              return (
                <li
                  className={cn(
                    "transition-ani transition-color rounded-lg bg-gradient-to-br px-4 py-8 text-white",
                    [
                      index % 2 == 0,
                      "bg-fuchsia-400 hover:bg-fuchsia-500",
                      "bg-violet-400 hover:bg-violet-500",
                    ]
                  )}
                >
                  <h3 className="font-bold">{skill.name}</h3>
                  <p>{skill.details}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-center text-5xl font-bold">Experience</h2>
          <ul className="mt-16 flex flex-col gap-y-8">
            {jobs.map((job, jobIndex) => (
              <li>
                <article className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-4">
                  <header className="mt-4">
                    <h3 className="font-bold">{job.title}</h3>
                    <h4 className="mt-1 text-sm font-normal text-slate-500">
                      {job.company}
                    </h4>
                    <h4 className="text-sm font-normal text-slate-500">
                      {job.date}
                    </h4>
                  </header>
                  <div className="transition-ani transition-color col-span-3 rounded-2xl bg-slate-100 p-6 hover:bg-slate-200  lg:p-10">
                    <p>{job.overview}</p>
                    <ul className="ml-6 mt-4 flex list-disc flex-col gap-y-2">
                      {job.details.map((detail, detailIndex) => (
                        <li>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-center text-5xl font-bold">Volunteer Work</h2>
          <ul className="mt-16 flex flex-col gap-y-8">
            {volunteer.map((job, jobIndex) => (
              <li>
                <article className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-4">
                  <header className="mt-4">
                    <h3 className="font-bold">{job.title}</h3>
                    <h4 className="mt-1 text-sm font-normal text-slate-500">
                      {job.company}
                    </h4>
                    <h4 className="text-sm font-normal text-slate-500">
                      {job.date}
                    </h4>
                  </header>
                  <div className="transition-ani transition-color col-span-3 rounded-2xl bg-slate-100 p-8  hover:bg-slate-200">
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
        </div>

        <div>
          <h2 className="text-center text-5xl font-bold">Education</h2>

          <ul className="mt-16 flex flex-col gap-y-4">
            {education.map((degree, degreeIndex) => (
              <li>
                <article className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-4">
                  <div></div>
                  <div className="transition-ani transition-color col-span-3 h-full w-full rounded-2xl border border-slate-200 px-8 py-12 hover:border-slate-300">
                    <header>
                      <h3 className="text-xl font-bold">{degree.title}</h3>
                      {/* {degree.date !== '' && (
          <h3 class="degree-date">{degree.date}</h3>
          )} */}
                      <h4 className="font-light">{degree.school}</h4>
                    </header>

                    <ul className="mt-2 text-sm text-slate-500">
                      {degree.details.map((detail, detailIndex) => (
                        <li>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentLayout>
  )
}

export const getStaticProps = async () => {
  const allPeople = getAllAuthors()

  return {
    props: { allPeople },
  }
}
