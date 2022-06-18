import logo from "../images/ironhack-logo-xs.png";
import menuIcon from "../images/menu-top-xs.png";

function Navbar() {
 return ( <nav>
    <img src={logo} alt="logo" />
    <img className="menu-icon" src={menuIcon} alt="menu" />
  </nav>)
}

export default Navbar;
