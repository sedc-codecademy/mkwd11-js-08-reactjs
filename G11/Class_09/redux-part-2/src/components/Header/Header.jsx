import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const welcomeMessage = "Website Title";

  return (
    <header>
      <nav className="navigation">
        <h3>{welcomeMessage}</h3>
        <ul className="navlinks">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/products">
            <li>Products</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
