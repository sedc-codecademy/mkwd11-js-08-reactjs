import './Header.css'
import Navigation from './Navigation/Navigation';

function Header() {
    const title = 'Our fist app'

    return <header>
            <h1>{ title }</h1>
            <Navigation />
           </header>
}

export default Header;