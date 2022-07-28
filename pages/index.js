import Head from 'next/head'
import MainWrapper from '../components/MainWrapper'
import { API_URL , fetchApi} from '../utils/hooks/useFetch';


export async function getServerSideProps() {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() +1;
  const todayDay = todayDate.getDate();

  // const apiUrl = `https://newsapi.org/v2/everything?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  // const res = await fetch(useFetch.fetchQuery('oppo'));
  // const news = await res.json();
  const news = await fetchApi(`${API_URL}/?q=samsung&searchIn=title&pageSize=30&from=${todayYear}-${todayMonth}-${todayDay-1}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);

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
        <title>INERTIA NEWS</title>
        {/* <link rel="icon" href="/iconpro.ico" /> */}
      </Head>

      <main className="max-w-screen-xl mx-auto px-8 py-4 ">
        <MainWrapper news={news}/>
      </main>
    </>
  )
}

