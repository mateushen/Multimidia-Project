import './header.css'
import Logo from '../../assets/img/dbz-logo.png'
import Home from '../../assets/img/home.png';
import Menu from '../../assets/img/list.svg'

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={Logo} width="200" />
            <div className="header-menu">
                <img src={Menu} width="40" />
            </div>
        </header>
    )
}