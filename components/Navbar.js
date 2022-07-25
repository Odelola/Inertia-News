import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navLogo from '../public/images/navbarImages/navLogo.svg'
import ModeToggler from './ModeToggler'


const Navbar = () => {

  return (
    <nav className="navigation w-full font-nunito font-400 py-4 z-50 bg-white shadow-sm dark-bg fixed left-0 top-0" id="navigation">
        <div className="nav-inner flex justify-between items-center max-w-screen-xl mx-auto px-8">
            <div className="nav-logo cursor-pointer">
                <Link href='/'>
                    <Image src={navLogo} className='h-4' />
                </Link>
            </div>
            <ModeToggler />
            {/* <ul className="nav-filters hidden md:flex gap-8 align-center">
                <li className="flex items-center">
                    <Link href="#">
                        <a className="text-[#170549] h-auto">Sports</a>
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
            </ul> */}
        </div>
    </nav>
  )
}

export default Navbar