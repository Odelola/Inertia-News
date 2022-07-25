import React from 'react'
import { BeakerIcon, BriefcaseIcon, ChipIcon, FilmIcon, GlobeIcon, LocationMarkerIcon } from "@heroicons/react/outline"
import SideBarLink from './SideBarLink'

const SideBarLinksNav = () => {
  const iconStyle = {
    className: "h-8 w-8",
  }
  return (
    <nav id="side-bar-links-nav" className="fixed left-0 top-20 min-h w-64 pt-4 px-8">
        <div className="side-bar-links-nav_inner flex flex-col gap-12">
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