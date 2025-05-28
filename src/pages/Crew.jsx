import { NavLink, Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import "./crew.css"


export default function Crew() {
    


    return (
        <div className="crew">
            <Nav></Nav>

            <Outlet></Outlet>

            <div className="crewNav">
                <NavLink to="" end className="crewBtn"></NavLink>
                <NavLink to="engineer" className="crewBtn"></NavLink>
                <NavLink to="pilot"className="crewBtn"></NavLink>
                <NavLink to="specialist" className="crewBtn"></NavLink>
            </div>
        </div>
    )
}