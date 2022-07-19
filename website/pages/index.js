import IconGrid from '../components/IconGrid'
import Search from '../components/Search'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Head from 'next/head'
import Notifications from '../components/Notifications'

const Index = () => {
  return (
    <main className="relative min-h-[101vh] bg-slate-50 pb-[150px]">
      <Head>
        <title>eldicons</title>
        <meta
          name="description"
          content="276 free and open source SVG icons. Each icon is designed on a 24x24 grid for simplicity, consitency, and readability."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Header />
      <Notifications />
      <div className="mx-auto max-w-[1180px] px-[10px] md:px-[20px] lg:px-[30px]">
        <Search />
        <IconGrid />
      </div>
      <Footer />
      <Menu />
    </main>
  )
}

export default Index
