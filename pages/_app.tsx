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
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
