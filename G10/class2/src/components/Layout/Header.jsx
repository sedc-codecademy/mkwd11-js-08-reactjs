import NavBar from "./NavBar"

export default function Header(props) {

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About us' },
        { href: '/contact', label: 'Contact' },
    ]

    return <header>
                <h1>{props.title}</h1>
                <NavBar links={links} />
           </header>
}