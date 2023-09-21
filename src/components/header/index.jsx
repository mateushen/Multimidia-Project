import './header.css'
import Logo from '../../assets/img/dbz-logo.png'

export default function Header() {
    return (
        <header className="header">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <nav className="side-menu">
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/dragonballz">Dragon Ball Z</a></li>
                    <li><a href="#">Dragon Ball Super</a></li>
                </ul>
            </nav>
            <img className="logo" src={Logo} width="200" />
        </header>
    )
}