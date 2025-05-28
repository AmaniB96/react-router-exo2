import './nav.css'
import Logo from '../../public/assets/shared/logo.svg'
import { Link, NavLink} from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <nav>
            <div className='logo-container'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='burger-menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`navigation-container ${isMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    <NavLink to="/react-router-exo2" onClick={() => setIsMenuOpen(false)}>00 HOME</NavLink>
                    <NavLink to="/destination" onClick={() => setIsMenuOpen(false)}>01 DESTINATION</NavLink>
                    <NavLink to="/crew" onClick={() => setIsMenuOpen(false)}>02 CREW</NavLink>
                    <NavLink to="/technology" onClick={() => setIsMenuOpen(false)}>03 TECHNOLOGY</NavLink>
                </ul>
            </div>
        </nav>
        </>
    )
}