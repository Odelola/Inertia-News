import Head from 'next/head'
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import MainWrapper from '../components/MainWrapper'

export async function getStaticProps() {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() +1;
  const todayDay = todayDate.getDate();

  const apiUrl = `https://newsapi.org/v2/everything?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay - 1}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  const res = await fetch(apiUrl);
  const news = await res.json();

  return {
    props: {
      news,
    },
  }
}


export default function Home({news}) {
  return (
    <>
      <Head>
        <title>NEWS PROJECT</title>
      </Head>

      <Navbar />
      <SearchHeader />
      <main className="max-w-screen-xl mx-auto px-8 py-4 ">
        <MainWrapper news={news}/>
      </main>
    </>
  )
}

