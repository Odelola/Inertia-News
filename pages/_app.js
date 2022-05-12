import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>NEWS PROJECT</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
