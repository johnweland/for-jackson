import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#212121" />
      </Head>
      <body className="bg-gray-5 antialiased mx-auto max-w-[1920px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}