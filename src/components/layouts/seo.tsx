import Head from 'next/head'
import { useRouter } from 'next/router'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, TWITTER } from '../../constants'

interface IProps {
  title: string
  description?: string
  url?: string
  isIndexed?: boolean
}

const SEO = ({ title, description, url, isIndexed = true }: IProps) => {
  const router = useRouter()

  const titleTemplate = `${title} - ${SITE_NAME}`

  if (!url) {
    url = router.asPath
  }

  url = `${SITE_URL}${url}`

  if (!description) {
    description = SITE_DESCRIPTION
  }

  return (
    <Head>
      <title>{titleTemplate}</title>

      <meta name="description" content={description} />
      {/* <meta name="image" content={seo.image} /> */}
      {url && <meta property="og:url" content={url} />}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {/* {seo.image && <meta property="og:image" content={seo.image} />} */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:creator" content={TWITTER} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {/* {seo.image && <meta name="twitter:image" content={seo.image} />} */}

      {/* if page is not indexed, we add tags to tell robots to ignore */}
      {!isIndexed && (
        <>
          <meta name="robots" content="noindex,nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />
        </>
      )}
    </Head>
  )
}

export default SEO
