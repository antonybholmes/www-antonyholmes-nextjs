import IChildrenProps from "../interfaces/children-props"
import { SITE_NAME } from "../constants"
import Head from "next/head"

interface Props extends IChildrenProps {
  title: string
  description?: string
  isIndexed?: boolean
}

export default function Seo({
  title,
  description,
  isIndexed = true,
  children,
}: Props) {
  const metaDescription = description ? description : `${title} page` //SITE_DESCRIPTION
  const metaTitle = `${title} - ${SITE_NAME}`

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      {/* <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      {!isIndexed && (
        <>
          <meta name="robots" content="noindex,nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />
        </>
      )}

      {children}
    </Head>
  )
}
