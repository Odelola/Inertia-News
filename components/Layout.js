import Navbar from "../components/Navbar"
import SearchHeader from "../components/SearchHeader"
import NewsModal from "./NewsModal"
import SIdeBarLinksNav from "./SIdeBarLinksNav"

const Layout = ({ children }) => {
  return (
    <>
      <NewsModal />
      <Navbar />
      <SearchHeader />
      <main className="max-w-screen-xl mx-auto gap-12 flex justify-between  px-4 md:px-0">
        <SIdeBarLinksNav />
        {children}
      </main>
    </>
  )
}

export default Layout