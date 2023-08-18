import './header.css'
import Logo from '../../assets/img/dbz-logo.png'
import Home from '../../assets/img/home.png';

export default function Header() {
    return (
        <header className="header">
            <a className="header-start" href="/"><img src={Home} width="40"/></a>
            <div className="header-icon">
                <img src={Logo} width="200" />
            </div>
        </header>
    )
}