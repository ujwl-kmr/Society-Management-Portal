import React from "react";
import "../home/Home.css"
import complaint6 from "../images/complaint6.png";
import forNeed from "../images/forNeed.png";
import forNeed2 from "../images/forNeed_2.png";
import Usernav from "../navbar/Usernav";
import Footer from "../footer/Footer";

function Home(){
return(
    <>
    <Usernav/>
        <div className="section2">
            <div className="content">
                <div className="text">
                    <h1>
                        Namma Society is a website whose aim is to provide convenience to the residents of
                        an apartment. The website will contain various features to help simplify daily chores.

                    </h1>



                </div>
                <img className="image2" src={complaint6} alt="" />


            </div>

        </div>
       
        <div className="section4">



            <h2>
                The No. 1 Community Management Website
            </h2>
            <p>
                Namma Society for every need
            </p>
            <div className="feature">
                <h3>
                    Why choose Namma Society?
                </h3>
                <p>
                    To make your life simple!
                </p>
                <ul>
                    <li>User Friendly Interface</li>
                    <li>
                        Quick and easy
                    </li>
                    <li>
                        24*7 support
                    </li>
                    <li>
                        User privacy
                    </li>

                </ul>

            </div>

        </div>
        <h2>
            Namma Society for every need!
        </h2>
        <div className="section5">
            <div className="card">
                <img src={forNeed} alt="" />
                <h4>
                    Resolve Complaints 
                </h4>
                <p>
                    Namma Society ensure that every complaint a person has is resolved timely.
                </p>
                <button> Know More</button>
            </div>
            <div className="card" >
                <img src={forNeed2} alt="" />
                <h4>
                    Get Needs Fulfilled 
                </h4>
                <p>
                    Namma society offers residents to request for any need or help they want.
                </p>
                <button> Know More</button>
            </div>
        </div>
        <Footer/>
        </>
     );
      }

export default Home;