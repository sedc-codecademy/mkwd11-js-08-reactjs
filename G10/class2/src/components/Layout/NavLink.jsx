export default function NavLink({ href, label }) {
    return (
        <li>
            <a href={href}>{label}</a>
        </li>
    )
}