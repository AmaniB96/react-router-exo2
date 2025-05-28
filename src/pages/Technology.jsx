import { NavLink, Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import './technology.css'

export default function Technology() {
    


    return(
        <div className="techno">

            <Nav></Nav>

            <Outlet></Outlet>

            <div className="technoNav">
                <NavLink to="" end><p>1</p></NavLink>
                <NavLink to="capsule"><p>2</p></NavLink>
                <NavLink to="port"><p>3</p></NavLink>
            </div>
        
        </div>
    )
}