import { useContext } from "react"
import Link from "next/link"
import { Store } from "../utils/store/Store"

const MainCards = ({ data }) => {
  // console.log(data)
  const { state: {modalShown, modalData}, dispatch } = useContext(Store);
  // const { modalShown } = state;
  const handleModal = () => {
    if(modalShown){
      dispatch({ type: 'SET_MODAL_OFF'},)
    }
   else{
    dispatch({ type: 'SET_MODAL_ON', payload: data,}, )
   }
  }

  let datePublished = new Date(Date.parse(data.publishedAt));
  let todayDate = new Date;
  // console.log(datePublished.getHours())
  let differenceInDate = todayDate.getHours() - datePublished.getHours();
  let differenceInDateMinutes = datePublished.getMinutes();
  // console.log(differenceInDateMinutes)
  let differenceInDateText = "hours ago";
  // console.log(data)
  // console.log(differenceInDate)
  switch (differenceInDate) {
    case 1:
      differenceInDateText = "hour ago"
      break;
    case 0:
      differenceInDate = differenceInDateMinutes;
      differenceInDateText = "minutes ago";
      break;
    default:
      differenceInDateText = "hours ago";
      break;
  }
  // console.log(differenceInDateText)
  return (
    <div className="news-card p-4 flex flex-row-reverse justify-between max-w-[700px] border border-[#E0E1EC] shadow-sm rounded-lg w-full sm:w-[500px] md:w-[600px]" onClick={() => handleModal()}>
      <div className="news-card_image">
        <img src={data.urlToImage} alt={data.description} className="w-28 h-28  object-cover rounded-xl bg-center" />
      </div>
      <div className="news-card_desc basis-3/4">
        <Link href={`#0`}>
          <h3 className="news-card_heading font-nunito font-bold text-[#170F49] hover:underline text-[14px] md:text-[17px]">{data.title}</h3>
        </Link>
        <div className="news-source flex gap-4 mt-6 sm:mt-4 md:mt-2">
          <span className="text-[#282454] font-zilla font-bold text-xs">{data.source.name}</span>
          {/* <span className="text-[#e0dee6] font-bold text-xs">{`${differenceInDate} ${!(differenceInDate == 1) ? `hours ago` : `hour ago`}`}</span> */}
          <span className="text-[#282454] font-zilla font-bold text-xs">{`${differenceInDate} ${differenceInDateText}`}</span>
        </div>
        {/* <p className="news-card_text font-zilla text-[#514F6E]">{`${data.content.substring(0, 99)} [...]`} <a href="#0">Read More</a></p> */}
      </div>
    </div>
  )
}

export default MainCards