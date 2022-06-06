import {useRef, useState }from 'react'

const SearchHeader = ({theTerm}) => {
  const searchInput = useRef(null);
  const [searchedTerm, setSearchedTerm] = useState('')

  function onEnterSearch (event) {
    const searchTerm = searchInput.current.value;
    if(event.key == "Enter"){
      console.log(searchTerm.trim());
      searchInput.current.value = ""
      setSearchedTerm(searchTerm);
    }
  }
  
  function theTerm() {
    theTerm = searchedTerm;
    return theTerm
  }
  return (
    <div className="news-search md:max-w-lg w-96 sm:bg-red h-12 mx-auto border-[#EFF0F7] border-solid border-2 rounded-full my-6 relative flex justify-between items-center mt-20 pr-2">
        <input type="text" name="search" ref={searchInput} placeholder="Search for topics or articles" className="md:w-[93%] w-[90%] h-full outline-none px-4 rounded-full text-xs font-normal text-[#170549] placeholder-[#6F6C90]" onKeyPress={onEnterSearch} />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        {/* <Image src={searchIcon} className="absolute -left-3 -top-3"/> */}
    </div>
  )
}

export default SearchHeader