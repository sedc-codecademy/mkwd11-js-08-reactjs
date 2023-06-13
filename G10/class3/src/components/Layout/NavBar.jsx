import NavLink from "./NavLink"

export default function NavBar({ links }) {
    return (
        <nav>
            <ul>
                {
                    links.map(link => 
                            <NavLink 
                                key={link.label}
                                href={link.href}
                                label={link.label}
                            />)
                }
            </ul>
        </nav>
    )
}