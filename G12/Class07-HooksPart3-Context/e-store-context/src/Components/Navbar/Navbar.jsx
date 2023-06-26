import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

function Navbar(props) {
  console.log("Navbar props", props);

  const { navbarLinkData } = props;

  const { getProductsInCart } = useContext(ProductsContext);

  const cartCount = getProductsInCart().length;

  return (
    <nav className="Navbar">
      <ul>
        {navbarLinkData.map((linkData, i) => (
          <li key={linkData.link + i}>
            {/* <a href={linkData.link}>{linkData.text}</a> */}
            <NavLink to={linkData.link}>
              {linkData.text}{" "}
              {linkData.link === "/cart" && cartCount > 0 && (
                <strong>{cartCount}</strong>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
