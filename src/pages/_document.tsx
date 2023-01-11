import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        /> */}

        <link href="/themes/prism.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="/themes/prism.js" />
      </body>
    </Html>
  )
}
