import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta
        name='viewport'
        content='width=device-width, intial-scale=1'
      />
    </Head>
    <Component {...pageProps} />
  </>
}
