import {useRef }from 'react'
import Image from 'next/image'
import searchIcon from '../public/images/searchImages/search.svg'

const SearchHeader = () => {


  const searchInput = useRef(null);
  
  function onEnterSearch (event) {
    const searchedTerm = searchInput.current.value;
    if(event.key == "Enter"){
      console.log(searchedTerm.trim());
      searchInput.current.value = ""
    }
  }
  return (
    <div className="news-search max-w-lg h-12 mx-auto border-[#EFF0F7] border-solid border-2 rounded-full my-6 relative flex justify-between pr-2">
        <input type="text" name="search" ref={searchInput} placeholder="Enter a word to search" className="w-[93%] h-full outline-none px-4 rounded-full text-xs font-normal text-[#170549] placeholder-[#6F6C90]" onKeyPress={onEnterSearch} />
        <Image src={searchIcon} className="absolute -left-3 -top-3"/>
    </div>
  )
}

export default SearchHeader