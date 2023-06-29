import { useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const activeLinkCart = useMemo(
    () => location.pathname.includes("/cart"),
    [location.pathname]
  );

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${!activeLinkCart ? "active" : ""}`}
                  to={`/`}
                  id="nav-home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLinkCart ? "active" : ""}`}
                  to={`/cart`}
                  id="nav-form"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
