import './nav.css'
import Logo from '../../public/assets/shared/logo.svg'

export default function Nav() {
    

    return (
        <>
        <nav>
            <div className='logo-container'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='navigation-container'>
                <ul>
                    <li>00 HOME</li>
                    <li>01 DESTINATION</li>
                    <li>02 CREW</li>
                    <li>03 TECHNOLOGY</li>
                </ul>
            </div>
        </nav>
        </>
    )
}