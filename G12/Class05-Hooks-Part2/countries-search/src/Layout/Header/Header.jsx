import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

function Header(props) {
  console.log("Header props", props);

  return (
    <header className="Header">
      <h1>{props.appTitle}</h1>
      <Navbar navbarLinkData={props.navbarLinkData} />
    </header>
  );
}

export default Header;
