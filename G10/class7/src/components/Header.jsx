import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const activeLinkForm = useMemo(
    () => location.pathname.includes("form"),
    [location.pathname]
  );

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${!activeLinkForm ? "active" : ""}`}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLinkForm ? "active" : ""}`}
                to={"/form"}
              >
                Add advertisement
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// <button as={Link}></button>
