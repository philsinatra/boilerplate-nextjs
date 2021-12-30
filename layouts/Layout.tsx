import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit-cover"
        />
      </Head>
      {/*
        Spritesheet
        Header/Banner/Common components
      */}
      {children}
      {/* Footer */}
    </>
  )
}
