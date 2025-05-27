import EuropaPlanete from '../../public/assets/destination/image-mars.webp'
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
                    <NavLink>EUROPA</NavLink>
                    <NavLink>TITAN</NavLink>
                </ul>

                <h2 className='planeteTitle'>EUROPA</h2>

                <p className='planeteText'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Avg. distance 225 mil. km Est. travel time 9 months</p>

                <hr />

                <span>EST. TRAVEL TIME</span>
                <h3>3 DAYS</h3>

            </div>
        </div>
    )
}