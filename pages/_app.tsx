import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page)
  return (
    getLayout(
      <>
        <main className="pt-32 pb-32 bg-light-gray02 min-h-screen">
          <Component {...pageProps} />
        </main>
      </>
    )
  )
  //return <Component {...pageProps} />
}

export default MyApp;