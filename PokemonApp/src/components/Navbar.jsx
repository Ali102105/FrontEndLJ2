import { Link } from 'react-router-dom'
import NavbarLogo from "../img/Navbar.png";

function Navbar() {
  return(
    <nav className="navbar">
      <img
       className="navbar-logo"
       src={NavbarLogo}
       alt="Homepage"
       />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;