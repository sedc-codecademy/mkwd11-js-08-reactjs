import Navbar from "../../Components/Navbar/Navbar";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";
import "./Header.css";

function Header(props) {
  console.log("Header props", props);

  return (
    <header className="Header">
      <h1>{props.appTitle}</h1>
      <ThemeToggle />
      <Navbar navbarLinkData={props.navbarLinkData} />
    </header>
  );
}

export default Header;
