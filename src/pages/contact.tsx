import BlueLink from '../components/link/blue-link'
import ReviewExpandDiv from '../components/reviews/review-expand-div'
import SideLayout from '../components/layouts/side-layout'

const Page = () => (
  <SideLayout title="Contact">
    <>
      <ReviewExpandDiv title="Want to contact me?" key={0}>
        <p className="mt-4">
          To contact me directly, email{' '}
          <BlueLink href="mailto:hello@antonyholmes.dev" aria="Email me">
            hello@antonyholmes.dev
          </BlueLink>
          .
        </p>
      </ReviewExpandDiv>

      <ReviewExpandDiv title="Media" className="mt-8" key={1}>
        <ul className="mt-4">
          <li>
            For ad sales and media / partnership inquiries, please email{' '}
            <BlueLink
              href="mailto:ads@antonyholmes.dev"
              aria="Email ads for help"
            >
              ads@antonyholmes.dev
            </BlueLink>
            .
          </li>
          <li>
            For press and media inquiries please email{' '}
            <BlueLink
              href="mailto:press@antonyholmes.dev"
              aria="Email press for help"
            >
              press@antonyholmes.dev
            </BlueLink>
            .
          </li>
        </ul>
      </ReviewExpandDiv>

      <ReviewExpandDiv title="Support" className="mt-8" key={2}>
        <ul className="mt-4">
          <li>
            For issues with the site please email{' '}
            <BlueLink
              href="mailto:admin@antonyholmes.dev"
              aria="Email admin for help"
            >
              admin@antonyholmes.dev
            </BlueLink>
            .
          </li>
        </ul>
      </ReviewExpandDiv>
    </>
    <></>
  </SideLayout>
)

export default Page
