import Link from 'next/link'
import React from 'react'

const SideBarLink = ({icon, linkText, redirect}) => {
  return (
    <Link href={redirect}>
        <a className='side-bar-link flex gap-4 items-center text-[#170F49] hover:text-[#2c2ae5]'>
            {icon}
            {linkText}
        </a>
    </Link>
  )
}

export default SideBarLink