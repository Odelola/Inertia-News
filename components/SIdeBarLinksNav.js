import React from 'react'
import { BeakerIcon, BriefcaseIcon, ChipIcon, FilmIcon, GlobeIcon, LocationMarkerIcon } from "@heroicons/react/outline"
import SideBarLink from './SideBarLink'

const SideBarLinksNav = () => {
  const iconStyle = {
    className: "h-8 w-8",
  }
  return (
    <nav id="side-bar-links-nav" className="w-64 hidden lg:block">
        <div className="side-bar-links-nav_inner flex-col gap-6 sticky top-0 flex">
            <SideBarLink icon={<LocationMarkerIcon {...iconStyle} />} linkText="Nigeria" redirect="/nigeria" />
            <SideBarLink icon={<GlobeIcon {...iconStyle} />} linkText="World" redirect="/world" />
            <SideBarLink icon={<BriefcaseIcon {...iconStyle} />} linkText="Business" redirect="/business" />
            <SideBarLink icon={<ChipIcon {...iconStyle} />} linkText="Technology" redirect="/technology" />
            <SideBarLink icon={<FilmIcon {...iconStyle} />} linkText="Entertainment" redirect="/entertainment" />
            <SideBarLink icon={<BeakerIcon {...iconStyle} />} linkText="Science" redirect="/science" />
        </div>
    </nav>
  )
}

export default SideBarLinksNav