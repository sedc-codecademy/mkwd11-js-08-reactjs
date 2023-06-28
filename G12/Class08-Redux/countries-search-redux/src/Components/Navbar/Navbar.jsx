import "./Navbar.css";

function Navbar(props) {
  console.log("Navbar props", props);

  const { navbarLinkData } = props;

  return (
    <nav className="Navbar">
      <ul>
        {navbarLinkData.map((linkData, i) => (
          <li key={linkData.link + i}>
            <a href={linkData.link}>{linkData.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
