import MainCards from './MainCards'
import Link from 'next/link'
import Loader from './Loader'

const MainWrapper = ({ news }) => {
  const newsItems = news?.articles?.filter((newsitem) => {return newsitem.urlToImage !== null})
  return(
    <div className='mainwrapper-inner max-w-[700px] mx-auto flex flex-col gap-4'>
      <Loader />
      {newsItems ? newsItems.map((data, key) => (
          // <Link href="#0" key={key}>
            // <a> 
              <MainCards data={data} key={key} id={data.author} />
            // </a>
          // </Link>
          )
        )
       : (<p>No Results</p>)}
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