import { NavLink, Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import "./crew.css"


export default function Crew() {
    


    return (
        <div className="crew">
            <Nav></Nav>

            <Outlet></Outlet>

            <div className="crewNav">
                <NavLink className="crewBtn"></NavLink>
                <NavLink className="crewBtn"></NavLink>
                <NavLink className="crewBtn"></NavLink>
                <NavLink className="crewBtn"></NavLink>
            </div>
        </div>
    )
}