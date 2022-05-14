import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navLogo from '../public/images/navbarImages/navLogo.svg'
import ModeToggler from './ModeToggler'

const Navbar = () => {
  return (
    <nav className="navigation w-full font-nunito font-400 py-4 z-50 bg-white shadow-sm" id="navigation">
        <div className="nav-inner flex justify-between items-center max-w-screen-xl mx-auto px-8">
            <div className="nav-logo">
                <Image src={navLogo} className='h-4' />
            </div>
            <ModeToggler />
            <ul className="nav-filters flex gap-8 align-center">
                <li className="flex items-center" >
                    <Link href="#">
                        <a className="text-[#170549]">Sports</a>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="#">
                        <a className="text-[#170549]">Business</a>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="#">
                        <a className="text-[#170549]">Nigeria</a>
                    </Link>
                </li>
            </ul>
            {/* <div className="nav-search"> */}
                {/* <form action="#0" id="nav_form-search w-36"> */}
                    {/* <div className="input-field border-stone-800 border-solid border-2 relative w-36 h-8 rounded-full overflow-hidden">
                        <input type="text" name="search" className="w-full h-full outline-none pl-2" id="" />
                        <Image src={searchIcon} width={16} height={16} className="absolute -left-3 -top-3"/>
                    </div> */}
                {/* </form> */}
            {/* </div> */}
        </div>
    </nav>
  )
}

export default Navbar