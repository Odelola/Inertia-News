const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const API_URL= 'https://newsapi.org/v2/everything'
// const API_URL2= 'https://mockapi.lumi.systems/getdevices'

export const fetchApi= async (url) =>{
    const res = await fetch(url);
    const news = await res.json();

    return news
}
