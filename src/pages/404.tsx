import HCenterRow from "../components/h-center-row"
import BlueIndexLink from "../components/link/blue-index-link"
import PageTitle from "../components/page-title"
import ContentLayout from "../layouts/content-layout"

export default function Page() {
  return (
    <ContentLayout title="Page Not Found" showTitle={false}>
      <HCenterRow className="mt-16">
        <PageTitle title="The page you're looking for can't be found." />
      </HCenterRow>
      <HCenterRow>
        <BlueIndexLink
          href="/sitemap"
          ariaLabel="Click to view site map"
          className="mt-16"
        >
          See our site map
        </BlueIndexLink>
      </HCenterRow>
    </ContentLayout>
  )
}
