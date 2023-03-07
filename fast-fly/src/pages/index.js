import Head from 'next/head'
import Navigation from '../../components/Navigation'
import HeroSection from '../../components/sections/HeroSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
<Navigation/>
<HeroSection/>
      </main>
    </>
  )
}
