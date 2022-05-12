import {useState} from 'react'
import Image from 'next/image'
import sunLogo from '../public/images/navbarImages/togglerImages/sun.svg'
import moonLogo from '../public/images/navbarImages/togglerImages/moon.svg'

const ModeToggler = () => {
    const [toggled, setToggled] = useState(false);
    const toggleIcons = () => {
        setToggled(!toggled)
    }
  return (
    <div id="mode-toggler" onClick={toggleIcons} className="cursor-pointer">
        {toggled ? <Image src={sunLogo} alt="Light Mode Icon" /> : <Image src={moonLogo} alt="Dark Mode Icon" />}
    </div>
  )
}

export default ModeToggler;
