import { Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import './destination.css'

export default function Destination() {
    

    return(
        <div className='destination'>

        <Nav></Nav>

        <Outlet/>
        </div>
    )
}