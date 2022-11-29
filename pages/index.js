import Head from 'next/head'
import MainWrapper from '../components/MainWrapper'
import NewsModal from '../components/NewsModal';
import SideBarLinksNav from '../components/SIdeBarLinksNav';
import { fetchApi, fetchApi3 } from '../utils/hooks/useFetch';
import dynamic from 'next/dynamic';


export async function getServerSideProps() {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();

  // const apiUrl = `https://newsapi.org/v2/everything?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  // const res = await fetch(useFetch.fetchQuery('oppo'));
  // const news = await res.json();
  // const news = await fetchApi(`${API_URL}/?q=oppo&searchIn=title&pageSize=30&from=${todayYear}-${todayMonth}-${todayDay-1}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
  // const news = fetchApi(`/everything?q=oppo&searchIn=title`).then(response => response.json())
  // .then(data => console.log(data));

  // console.log(news)
  // const json = await fetchApi2.json()
  // const { news } = json

const news = await fetchApi3(`/top-headlines?country=us`)
// const news = await fetchApi3()
  return {
    props: {
      news,
    },
  }
}


function Home({ news }) {
  console.log(news)
  return (
    <>
      <Head>
        <title>INERTIA NEWS</title>
        {/* <link rel="icon" href="/iconpro.ico" /> */}
      </Head>

      <MainWrapper news={news} />
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
})