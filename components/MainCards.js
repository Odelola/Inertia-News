// import Image from 'next/image'

const MainCards = ({ data }) => {

    // if(data.urlToImage === null){
    //   return(
    //     // <div className="news-card d-none">
    //     // </div>
    //     <>
    //     </>
    //   );
    // }

    return (
      <div className="news-card px-4 py-12 bg-white max-h-[700px] shadow-sm rounded-lg">
        <div className="news-card_image">
          {/* <Image src={data.urlToImage} alt={data.description} width="100%" height="100%" layout='fill' /> */}
          <img src={data.urlToImage} alt={data.description} className="w-full h-48 rounded-xl object-cover my-4" />
        </div>
        <div className="news-card_desc">
          <h3 className="news-card_heading font-nunito font-bold text-[18px] mb-4 font-dm-sans text-[#170F49]">{data.title}</h3>
          <p className="news-card_text font-zilla text-[#514F6E]">{`${data.content.substring(0, 200)} ...`}</p>
        </div>
      </div>
    )
  }
  
  export default MainCards