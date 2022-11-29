import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const API_URL = 'https://newsapi.org/v2'



// const options = {
//     method: "GET", 
//     headers: {
//         "X-API-Key": `${process.env.NEXT_PUBLIC_API_KEY}`
//     },
// };


export const fetchApi = async (url) => {
    const data = await axios.get(`${API_URL}&apiKey=${API_KEY}/${url}`, options).then((response) => response.json());

    return data
}

// export const fetchApi2 = await fetch(API_URL, options);
export const fetchApi3 = async (url) =>{
    const res = await fetch(`${API_URL}/${url}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
    // const res = await fetch(`https://newsapi.org/v2/everything?q=xiaomi&searchIn=title&pageSize=100&from=${todayYear}-${todayMonth}-${todayDay}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const news = await res.json();

    return news
}



















































// const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// export const API_URL= 'https://newsapi.org/v2'
// // const API_URL2= 'https://mockapi.lumi.systems/getdevices'



// const options = {
//     headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
//     },
//   };




// export const fetchApi= async (url) =>{
//     const res = await fetch(url);
//     const news = await res.json();

//     return news
// }



// export const fetchApi= async (url) =>{
//     const res = await fetch(`API_URL${pageNumber}`)
//     options
// );