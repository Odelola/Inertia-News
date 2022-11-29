import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import MainWrapper from "../components/MainWrapper";
import { API_URL, fetchApi } from '../utils/hooks/useFetch';


export async function getServerSideProps({ query }) {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();

  const news = await fetchApi(`${API_URL}/?q=${query.term}&searchIn=title&pageSize=30&from=${todayYear}-${todayMonth}-${todayDay - 1}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);

  return {
    props: {
      news,
    }
  }
}

const search = ({ news }) => {
  const router = useRouter();
  const { query: { term } } = router
  console.log(term)
  return (
    <>
      <Head>
        <title>{`Search results for ${term}`}</title>
      </Head>
      <MainWrapper news={news} />
    </>
  )
}
export default dynamic(() => Promise.resolve(search), {
  ssr: false,
})