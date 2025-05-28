import TitanPlanete from '../../public/assets/destination/image-titan.webp'
import { NavLink } from 'react-router-dom'

export default function Titan() {
    

    return(
        <div className='desti'>
            <div className='planete'>
                <div className='pick'>
                    <p className='number'>01</p>
                    <p>PICK YOUR DESTINATION</p>
                </div>
                
                <img src={TitanPlanete} alt="" />
            </div>

            <div className='planeteDesc'>
                <ul className='planeteList'>
                    <NavLink to="/destination/moon">MOON</NavLink>
                    <NavLink to="/destination/mars">MARS</NavLink>
                    <NavLink to="/destination/europa">EUROPA</NavLink>
                    <NavLink>TITAN</NavLink>
                </ul>

                <h2 className='planeteTitle'>Titan</h2>

                <p className='planeteText'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. Avg. distance 1.6 bil. km Est. travel time 7 years</p>

                <hr />

                <span>EST. TRAVEL TIME</span>
                <h3>7 YEARS</h3>

            </div>
        </div>
    )
}