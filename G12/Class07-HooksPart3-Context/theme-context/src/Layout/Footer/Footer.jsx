import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      {props.children}
      <small>By Borisovski Borche ©️ SEDC 2023</small>
    </footer>
  );
}

export default Footer;
