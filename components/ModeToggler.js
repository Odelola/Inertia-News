import {useState} from 'react'
import {useTheme} from "next-themes";
// import { useRouter } from 'next/router'
import Image from 'next/image'
import sunLogo from '../public/images/navbarImages/togglerImages/sun.svg'
import moonLogo from '../public/images/navbarImages/togglerImages/moon.svg'

const ModeToggler = () => {


  const {systemTheme , theme, setTheme} = useTheme ();
  const renderThemeChanger= () => {

    const currentTheme = theme === "system" ? systemTheme : theme ;
      if(currentTheme ==="dark"){
          return (
            <sunLogo className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }
      else {
        return (
          <moonLogo className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
      }
    }


    const [toggled, setToggled] = useState(false);
    // const router = useRouter();
    const toggleIcons = () => {
        setToggled(!toggled);
    }
  return (
    <div id="mode-toggler" onClick={toggleIcons} className="cursor-pointer">
        {/* {toggled ? <Image src={sunLogo} alt="Light Mode Icon" /> : <Image src={moonLogo} alt="Dark Mode Icon" />} */}
        {renderThemeChanger()}
    </div>
  )
}

export default ModeToggler;
