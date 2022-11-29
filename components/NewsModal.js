import { useContext } from "react"
import { LinkIcon } from '@heroicons/react/outline'
import { Store } from "../utils/store/Store"

Store
const NewsModal = () => {
  const handleModal = () => {
    // if(modalShown){
    dispatch({ type: 'SET_MODAL_OFF' },)
    // }
  }
  const { state: { modalShown, modalData }, dispatch } = useContext(Store)
  return (
    <>
      {modalShown &&
        <div id="modal" className="fixed bg-[#F7F7FB] left-0 top-0 w-full h-full z-[1000] overflow-y-scroll" onClick={() => handleModal()}>
          <div className="modal-inner max-w-screen-lg mx-auto px-8 py-12">
            <h2 className="text-[22px] text-center">{modalData.title}</h2>
            <p className="news-description text-[14px] text-center w-1/2 mx-auto">{modalData.description}</p>
            <a href={modalData.url} className="linkToRealSite flex gap-2 text-lg items-center cursor-pointer hover:underline" target="_blank">
              Go to Real Site.
              <LinkIcon className="w-[16px] h-[16px]" />
            </a>
            <div className="modal-news-image mt-8">
              <img src={modalData.urlToImage} alt={modalData.description} className="w-full h-[500px] object-cover bg-center rounded-lg" />
            </div>
            <div className="moal-news-content max-w-[700px] mx-auto mt-8">
              <div className="w-full mb-6">
                {modalData.content}
                <br />
              </div>
              <a href={modalData.url} className="linkToRealSite flex gap-2 text-lg items-center cursor-pointer hover:underline" target="_blank">
                Go to Real Site.
                <LinkIcon className="w-[16px] h-[16px]" />
              </a>
            </div>
          </div>
        </div>}
    </>
  )
}

export default NewsModal