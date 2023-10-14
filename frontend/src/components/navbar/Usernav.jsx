import React from 'react';
import Logo from "../images/LOGO.jpg";
import { Link } from "react-router-dom";
import "../navbar/Usernav.css";

export default function Navbar(){
return(
    <>
<div className="nav">
    <div className="logo">
        <img src={Logo} alt="Logo" srcset=""/>
        <h1>
            Namma <span>Society</span>
        </h1>

    </div>
    <div className="header-list">
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/Complaints">Complaints</Link></li>
        <li><Link to="/Dailyhelp" >Daily Needs</Link></li>
        <li><Link to="/Adminlogin">Admin Login</Link></li>
        </ul>

    </div>
</div>
</>
);
}
