import { useState } from "react"

function Header(){
  const [navDisplay,setNavDisplay] = useState(false)

  function handleNavDisplay(){
    setNavDisplay(prevState => prevState = !prevState)
  }

  return (
      <header>
          <nav>
            <img src="/images/logo.svg" alt="Logo" className="logo"/>
            <img 
              src="/images/icon-hamburger.svg"
              alt="Open Menu"
              aria-controls="top-nav"
              aria-expanded={navDisplay ? "true" : "false"}
              className="toggle-menu"
              onClick={handleNavDisplay}
            />
            <ul id="top-nav" className={navDisplay ? "top-nav show-nav" : "top-nav"}>
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>
          </nav>
      </header>
  )
}

export default Header