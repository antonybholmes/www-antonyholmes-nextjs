import BlueLink from "../components/link/blue-link"
import ReviewExpandDiv from "../components/review-expand-div"
import SideLayout from "../layouts/side-layout"

export default function Page() {
  return (
    <SideLayout title="Contact Us">
      <>
        <div className="mt-8" slot="main">
          <ReviewExpandDiv title="Want to say hello?">
            <p className="mt-4">
              To contact me directly, email{" "}
              <BlueLink
                href="mailto:hello@antonyholmes.dev"
                ariaLabel="Email me"
              >
                hello@antonyholmes.dev
              </BlueLink>
            </p>
          </ReviewExpandDiv>

          <ReviewExpandDiv title="Media" className="mt-8">
            <ul className="mt-4">
              <li>
                For ad sales and media / partnership inquiries, please email{" "}
                <BlueLink
                  href="mailto:ads@antonyholmes.dev"
                  ariaLabel="Email ads for help"
                >
                  ads@antonyholmes.dev
                </BlueLink>
              </li>
              <li>
                For press and media inquiries please email{" "}
                <BlueLink
                  href="mailto:press@antonyholmes.dev"
                  ariaLabel="Email press for help"
                >
                  press@antonyholmes.dev
                </BlueLink>
              </li>
            </ul>
          </ReviewExpandDiv>

          <ReviewExpandDiv title="Support" className="mt-8">
            <ul className="mt-4">
              <li>
                For issues with the site please email{" "}
                <BlueLink
                  href="mailto:admin@antonyholmes.dev"
                  ariaLabel="Email admin for help"
                >
                  admin@antonyholmes.dev
                </BlueLink>
              </li>
            </ul>
          </ReviewExpandDiv>
        </div>
      </>
      <></>
    </SideLayout>
  )
}
