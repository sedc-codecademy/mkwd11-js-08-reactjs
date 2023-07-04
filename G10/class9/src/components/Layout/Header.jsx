import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../common/actions/authActions";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const activeLinkCart = useMemo(
    () => location.pathname.includes("/cart"),
    [location.pathname]
  );

  const handleLogin = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
              <li>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogin}
                >
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
