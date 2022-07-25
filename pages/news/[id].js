import React from 'react'
import { API_URL, fetchApi } from '../../utils/hooks/useFetch';

const NewsDetails = ({title, description}) => {
  return (
    <div className="malam">
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth() +1;
    const todayDay = todayDate.getDate();
    const news = await fetchApi(`${API_URL}/?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
    console.log(news)
    const newsItems = news.articles.map(newsitem =>({params: {author: newsitem.author}}));
    // const newsDetail = newsItems.map(newsdetail => ({params: {author: newsdetail.author}}))
  
    return {
      paths: [...newsItems],
      fallback: true,
    };
  };


  export const getStaticProps = async ({ params: {author} }) => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth() +1;
    const todayDay = todayDate.getDate();
    const news = await fetchApihApi(`${API_URL}/?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const newsDetails = news.find(x => x.author === author);
  
    return {
      props: {
        title: newsDetails.title,
        description: newsDetails.description
      }
    };
  };
  
export default NewsDetails;






























// import React from 'react'
// import useFetch from '../../utils/hooks/useFetch';

// const newsItem = ({newsItem}) => {
//   return (
//     <div>newsItem</div>
//   )
// }

// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { id } }
//       ],
//       fallback: true // false or 'blocking'
//     }
// };
  
// export async function getStaticProps({params : {id}}) {  
//     // const apiUrl = `https://newsapi.org/v2/everything?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
//     const res = await fetch(useFetch.fetchQuery('oppo'));
//     const news = await res.json();
  
//     return {
//       props: {
//         news,
//       },
//     }
//   }

// // export default newsItem