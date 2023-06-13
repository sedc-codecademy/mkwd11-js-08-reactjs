import { Link } from "react-router-dom";

export default function NavLink({ href, label }) {
  return (
    <li>
      <Link to={href}>{label}</Link>
    </li>
  );
}
