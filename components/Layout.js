import Navbar from "../components/Navbar"
import SearchHeader from "../components/SearchHeader"
import SIdeBarLinksNav from "./SIdeBarLinksNav"

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <SearchHeader />
        <SIdeBarLinksNav />
        {children}
    </>
  )
}

export default Layout