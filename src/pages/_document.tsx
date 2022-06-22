import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GTAG } from '../constants'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
          <link rel="icon" href="/favicon.svg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />

          <link rel="manifest" href="/manifest.webmanifest" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />

          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GTAG}');`,
            }}
          /> */}

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-W3NDDXMDMP"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-W3NDDXMDMP');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
