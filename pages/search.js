import Head from "next/head";
import { useRouter } from "next/router";
import MainWrapper from "../components/MainWrapper";
import { API_URL , fetchApi} from '../utils/hooks/useFetch';



export async function getServerSideProps({ query }) {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() +1;
  const todayDay = todayDate.getDate();

  const news = await fetchApi(`${API_URL}/?q=${query.term}&searchIn=title&pageSize=30&from=${todayYear}-${todayMonth}-${todayDay-1}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);


  return {
    props:{
      news,
    }
  }
}
const search = ({news}) => {
  const { query }= useRouter();
  console.log(query.term);
    return (
        <>
        <Head>
          <title>Search results for {query.term}</title>
        </Head>
          <MainWrapper news={news}/>
        </>
  )
} 
export default search