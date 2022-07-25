// import MainWrapper from "../components/MainWrapper"
import {useRouter} from "next/router"
// import {changeName} from "../utils/hooks/useFetch"
import useFetch from "../utils/hooks/useFetch"

// const getRouterTerm = () =>{
//   const router = useRouter();
//   const resultsTerm = router.query.term;

//   return resultsTerm;
// }
const search = ({}) => {
  // console.log(getRouterTerm());
    return (
        <>
          {/* <MainWrapper /> */}
        </>
  )
}

// export async function getStaticProps({params: getRouterTerm}) {
    
//     // const apiUrl = `https://newsapi.org/v2/everything?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
//     //    changeName(router.query.term);
//     // resultsTerm = context.params.term
//     const res = await fetch(useFetch.fetchQuery(getRouterTerm()));
//     const searchedNews = await res.json();
//     // console.log(searchedNews);
//     return {
//       props: {
//         searchedNews,
//       },
//     }
//   }
  
export default search