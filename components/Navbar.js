import React from 'react'
import { useTheme } from "next-themes";
import Link from 'next/link'
import Image from 'next/image'
import navLogo from '../public/images/navbarImages/navLogo.svg'
import navLogoDark from '../public/images/navbarImages/navLogoDark.svg'
import ModeToggler from './ModeToggler'

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const responsiveStyles = {
        // className: 'max-[320px]:hidden'
        className: 'max-[320px]:bg-sky-300'
    }

    return (
        <nav className={`navigation w-full font-nunito font-400 py-4 z-50 bg-white shadow-sm dark-bg fixed left-0 top-0`} id="navigation">
            <div className="nav-inner flex justify-between items-center max-w-screen-xl mx-auto px-8">
                <div className="nav-logo cursor-pointer">
                    <Link href='/'>
                        <Image src={theme === "dark" ? navLogo : navLogoDark} className='h-4' />
                    </Link>
                </div>
                <ModeToggler />
            </div>
        </nav>
    )
}

export default Navbar