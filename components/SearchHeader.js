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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </div>
  )
}

export default SearchHeader