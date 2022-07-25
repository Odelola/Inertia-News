// import Image from 'next/image'

import Link from "next/link"

const MainCards = ({ data, id }) => {

    return (
      <div className="news-card p-4 flex flex-row-reverse justify-between max-w-[700px] border border-[#E0E1EC] shadow-sm rounded-lg">
        <div className="news-card_image">
          <img src={data.urlToImage} alt={data.description} className="w-28 h-28   object-cover rounded-xl bg-center" />
        </div>
        <div className="news-card_desc">
          <Link href={`/news/${id}`}>
            <h3 className="news-card_heading font-nunito font-bold text-[17px]font-nunito text-[#170F49] hover:underline">{data.title}</h3>
          </Link>
          {/* <p className="news-card_text font-zilla text-[#514F6E]">{`${data.content.substring(0, 99)} [...]`} <a href="#0">Read More</a></p> */}
        </div>
      </div>
    )
  }
  
  export default MainCards