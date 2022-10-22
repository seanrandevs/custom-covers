import { VscChromeClose } from "react-icons/vsc";
import { GoThreeBars }from "react-icons/go";
import { useRef } from "react";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
   <section className="navbar navbar-expand">
    <div className="navbar-brand">CUSTOM COVERS</div>
      <nav ref={navRef} className="collapse navbar-collapse">
        <ul>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
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