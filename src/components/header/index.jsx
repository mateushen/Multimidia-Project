import './header.css'
import Logo from '../../assets/img/dbz-logo.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header-icon">
                <img src={Logo} width="200" />
            </div>
        </header>
    )
}