import './nav.css'
import Logo from '../../public/assets/shared/logo.svg'
import { Link, NavLink} from 'react-router-dom'


export default function Nav() {
    

    return (
        <>
        <nav>
            <div className='logo-container'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='navigation-container'>
                <ul>
                    <NavLink to="/">00 HOME</NavLink>
                    <NavLink to="/destination">01 DESTINATION</NavLink>
                    <NavLink to="/crew">02 CREW</NavLink>
                    <NavLink>03 TECHNOLOGY</NavLink>
                </ul>
            </div>
        </nav>
        </>
    )
}