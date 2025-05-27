import './moon.css'
import MoonPlanete from '../../public/assets/destination/image-moon.png'
import { NavLink } from 'react-router-dom'

export default function Moon() {
    

    return(
        <div className='desti'>
            <div className='planete'>
                <div className='pick'>
                    <p className='number'>01</p>
                    <p>PICK YOUR DESTINATION</p>
                </div>
                
                <img src={MoonPlanete} alt="" />
            </div>

            <div className='planeteDesc'>
                <ul className='planeteList'>
                    <NavLink>MOON</NavLink>
                    <NavLink>MARS</NavLink>
                    <NavLink>EUROPA</NavLink>
                    <NavLink>TITAN</NavLink>
                </ul>

                <h2 className='planeteTitle'>MOON</h2>

                <p className='planeteText'>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollon 11 landing sites </p>

                <hr />

                <span>EST. TRAVEL TIME</span>
                <h3>3 DAYS</h3>

            </div>
        </div>
    )
}