import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

import '../styles/NavBarNoInfo.css'

function NavBarNoInfo() {
    return (
        <div className="nav">
            <div className="nav-left">
                <Link to="/">
                    <img src={logo} className="logo" draggable="false"/>
                </Link>
                
                <h3 className="name">KU PORTAL</h3>
            </div>
        </div>
    )
}

export default NavBarNoInfo