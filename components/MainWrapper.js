import MainCards from './MainCards'
import Link from 'next/link'
import Loader from './Loader'

const MainWrapper = ({ news }) => {
  const newsItems = news.articles.filter((newsitem) => {return newsitem.urlToImage !== null})
  console.log(newsItems)
  return(
    <div className='mainwrapper-inner grid grid-cols-3 gap-8'>
      <Loader />
      {newsItems.map((data, key) => (
          <Link href={`${data.url}`} key={key}>
            <a target="_blank"> 
              <MainCards data={data} />
            </a>
          </Link>
          )
        )
      }
    </div>
  )
}

export default MainWrapper;


















































// const [posts, setPosts] = useState({})
// useEffect(() => {
//     // fetchApi();
//   }, [])

//   const fetchApi = async () =>{
//     const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-03-30&sortBy=publishedAt&apiKey=c97dcc017bce4c27aab686e6e5580332`);
//     const data = await res.json();
//     console.log(data)
//     setPosts(data);

//   }