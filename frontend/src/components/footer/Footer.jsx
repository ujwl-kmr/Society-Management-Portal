import React from 'react';
import "../footer/Footer.css";

export default function Footer(){
return(
    <>
<footer>
    <h2>
        Namma Society
    </h2>
    <div className="footer-body">
        <p>
            Namma Society is a website that provides convenience to the residents of apartments. The
            website contains various features to help simplify daily chores.
        </p>
    </div>
    <div className="contact-list">
        <ul>

            <li>
                #21/7 Andrahalli, Bangalore
            </li>
            <li>
                93872971212
            </li>
            <li>
            NammaSociety@gmail.com
            </li>

        </ul>
    </div>

    <span className="span">
        <i className="fa-solid fa-copyright"></i>
        2023 Inc. All rights reserved
    </span>
</footer>
</>
)
}