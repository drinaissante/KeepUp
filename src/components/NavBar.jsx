import { IoPerson, IoPersonAddSharp } from "react-icons/io5";

import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

import '../styles/NavBar.css'

function NavBar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <Link to="/">
                    <img src={logo} className="logo" draggable="false"/>
                </Link>
                
                <h3 className="name">KU PORTAL</h3>
            </div>

            <div className="nav-info">
                <div className="nav-reg">
                    <IoPersonAddSharp size={18} className="reg-icon"/>
                    <h3> REGISTER </h3>
                </div>

                <div className="nav-login">
                    <IoPerson size={18} className="login-icon"/>
                    <h3> LOGIN </h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar