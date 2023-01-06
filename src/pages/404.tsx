import HCenterRow from "../components/h-center-row"
import BlueIndexLink from "../components/link/blue-index-link"
import Title from "../components/title"
import ContentLayout from "../layouts/content-layout"

export default function Page() {
  return (
    <ContentLayout title="Page Not Found" showTitle={false}>
      <HCenterRow className="mt-16">
        <Title className="text-center">
          The page you're looking for can't be found.
        </Title>
      </HCenterRow>
      <HCenterRow>
        <BlueIndexLink
          href="/sitemap"
          ariaLabel="Click to view site map"
          className="mt-16"
          text="See our site map"
        />
      </HCenterRow>
    </ContentLayout>
  )
}
