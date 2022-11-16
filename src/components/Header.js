import { VscChromeClose } from "react-icons/vsc";
import { GoThreeBars }from "react-icons/go";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
   const hideNavbar = () =>{
    navRef.current.classList.remove("responsive_nav")
  }

  return (
   <section className="navbar navbar-expand">
    <div className="navbar-brand">
      <HashLink className="brand" smooth to="#home">CUSTOM COVERS</HashLink>
    </div>
      <nav ref={navRef} className="collapse navbar-collapse">
        <ul>
          <li>
            <HashLink className="link" smooth to="#work" onClick={hideNavbar}>WORK</HashLink>
            </li>
          <li>
            <HashLink className="link" smooth to="#about" onClick={hideNavbar}>ABOUT</HashLink>
            </li>
          <li>
            <HashLink className="link" smooth to="#gallery" onClick={hideNavbar}>GALLERY</HashLink>
            </li>
          <li>
            <HashLink className="link" smooth to="#contact" onClick={hideNavbar}>CONTACT</HashLink>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <VscChromeClose size={30} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <GoThreeBars size={30} />
      </button>
    </section>
  )
}

export default Header