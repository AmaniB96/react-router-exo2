import EuropaPlanete from '../../public/assets/destination/image-europa.webp'
import { NavLink } from 'react-router-dom'

export default function Europa() {
    

    return(
        <div className='desti'>
            <div className='planete'>
                <div className='pick'>
                    <p className='number'>01</p>
                    <p>PICK YOUR DESTINATION</p>
                </div>
                
                <img src={EuropaPlanete} alt="" />
            </div>

            <div className='planeteDesc'>
                <ul className='planeteList'>
                    <NavLink to="/destination/moon">MOON</NavLink>
                    <NavLink to="/destination/mars">MARS</NavLink>
                    <NavLink >EUROPA</NavLink>
                    <NavLink to="/destination/titan">TITAN</NavLink>
                </ul>

                <h2 className='planeteTitle'>EUROPA</h2>

                <p className='planeteText'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. Avg. distance 628 mil. km Est. travel time 3 years</p>

                <hr />

                <span>EST. TRAVEL TIME</span>
                <h3>3 YEARS</h3>

            </div>
        </div>
    )
}