import React from 'react';
import Logo from "../images/LOGO.jpg";
import { Link } from "react-router-dom";
import "../navbar/Adminnav.css";

export default function Adminnav(){
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
        <li className='logout-button'><Link to='/'>Logout</Link></li>
        </ul>

    </div>
</div>
</>
);
}
