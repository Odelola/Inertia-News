const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const API_URL= 'https://newsapi.org/v2/everything'
const query = 'javascript'
const language = 'en'
const useFetch= {
    fetchQuery:  `${API_URL}?q=${query}&language=${language}&apiKey=${API_KEY}`,
}

export default useFetch;