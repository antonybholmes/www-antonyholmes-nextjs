import ArticleLayout from '../components/layouts/article-layout'
import PageTitle from '../components/page-title'
import TwoThirdsColLayout from '../components/two-thirds-col-layout'

import jobs from '../../_content/jobs.json'
import volunteer from '../../_content/volunteer.json'
import education from '../../_content/education.json'
import skills from '../../_content/skills.json'
import VCenterRow from '../components/v-center-row'
import SideLayout from '../components/layouts/side-layout'
import ReviewExpandDiv from '../components/reviews/review-expand-div'

const Page = () => {
  return (
    <SideLayout title="Resume">
      <div>
        <h2 className="text-indigo-600 uppercase">Skills</h2>

        {skills.map((skillset, skillSetIndex) => (
          <section key={skillSetIndex}>
            <h3 className="text-slate-400 font-normal my-4">{skillset.name}</h3>

            <ul className="grid grid-cols-2 gap-4">
              {skillset.skills.map((skill, skillIndex) => (
                <li
                  className="bg-indigo-50 text-indigo-400 p-4 rounded-lg"
                  key={skillIndex}
                >
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-details">{skill.details}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <h2 className="mt-16 text-indigo-600 uppercase">Experience</h2>
        <ul className="mt-4">
          {jobs.map((job, jobIndex) => (
            <li key={jobIndex} className="mb-8">
              <ReviewExpandDiv title={job.title}>
                <article className="mt-2">
                  <header className="text-indigo-400">
                    {/* <h3 className="job-title">{job.title}</h3> */}
                    <VCenterRow className="justify-between">
                      <h3 className="font-light ">{job.company}</h3>
                      <h3 className="font-light ">{job.date}</h3>
                    </VCenterRow>
                  </header>
                  <p className="job-overview">{job.overview}</p>
                  <ul className="list-disc ml-6">
                    {job.details.map((detail, detailIndex) => (
                      <li className="mb-1" key={detailIndex}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </ReviewExpandDiv>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-indigo-600 uppercase">Volunteer Work</h2>
        <ul className="mt-4">
          {volunteer.map((job, jobIndex) => (
            <li key={jobIndex} className="mb-8">
              <ReviewExpandDiv title={job.title}>
                <article className="mt-2">
                  <header className="text-indigo-400">
                    {/* <h3 className="job-title">{job.title}</h3> */}
                    <VCenterRow className="justify-between">
                      <h3 className="font-light">{job.company}</h3>
                      <h3 className="font-light">{job.date}</h3>
                    </VCenterRow>
                  </header>
                  <ul className="details-list">
                    {job.details.map((detail, detailIndex) => (
                      <li className="detail" key={detailIndex}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </ReviewExpandDiv>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-indigo-600 uppercase">Education</h2>
        <ul className="grid grid-cols-2 gap-8 mt-4">
          {education.map((degree, degreeIndex) => (
            <li
              className="p-6 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white"
              key={degreeIndex}
            >
              <header>
                <h2>{degree.title}</h2>
                {/* {degree.date !== '' && (
                  <h3 className="degree-date">{degree.date}</h3>
                )} */}
                <h4 className="font-light">{degree.school}</h4>
              </header>

              <ul>
                {degree.details.map((detail, detailIndex) => (
                  <li className="detail" key={detailIndex}>
                    {detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <></>
    </SideLayout>
  )
}

export default Page
