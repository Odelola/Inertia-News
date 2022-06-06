// import Image from 'next/image'

const MainCards = ({ data }) => {
    return (
      <div className="news-card pb-12 bg-white max-h-[700px] shadow-sm rounded-lg">
        <div className="news-card_image">
          <img src={data.urlToImage} alt={data.description} className="w-full h-60 object-cover rounded-xl bg-center my-4" />
        </div>
        <div className="news-card_desc px-4">
          <h3 className="news-card_heading font-nunito font-bold text-[17px] mb-4 font-dm-sans text-[#170F49]">{data.title}</h3>
          <p className="news-card_text font-zilla text-[#514F6E]">{`${data.content.substring(0, 99)} [...]`} <a href="#0">Read More</a></p>
        </div>
      </div>
    )
  }
  
  export default MainCards