import '../scss/app.scss'

import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout'
import { AppProvider } from '../state'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}
