import Link from 'next/link'
import React from 'react'

const SideBarLink = ({icon, linkText, redirect}) => {
  return (
    <Link href={redirect}>
        <a className='side-bar-link flex gap-4 items-center text-[#170F49] hover:text-[#2c2ae5] hover:bg-[#e0dff1] p-4 rounded-full hidden lg:flex'>
            {icon}
            {linkText}
        </a>
    </Link>
  )
}

export default SideBarLink