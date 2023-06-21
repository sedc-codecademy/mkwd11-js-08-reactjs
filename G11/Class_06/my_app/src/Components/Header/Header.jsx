import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const welcomeMessage = "Website Title";
  const navlinks = ["Home", "Products", "About", "Contact"];

  return (
    <header>
      <nav className="navigation">
        <h3>{welcomeMessage}</h3>
        <ul className="navlinks">
          {/* THIS IS BAD */}
          {/* <a href="/">
            <li>Home</li>
          </a>

          <a href="/products">
            <li>Products</li>
          </a>

          <a href="/about">
            <li>About</li>
          </a> */}

          {/* BETTER */}

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "magenta" : "black",
            })}
            to="/"
          >
            <li>Home</li>
          </NavLink>

          <Link to="/products">
            <li>Products</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          {/* <Link to="/about">
            <li>About</li>
          </Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
