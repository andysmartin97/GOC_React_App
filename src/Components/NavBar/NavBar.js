import React from "react";
import {
    Router,
    Route,
    Routes,
    NavLink,
    HashRouter,
    
} from "react-router-dom";
import LogoImage from './logo.png';

import Home from '../Home/Home';
import Contact from "../Contact/Contact";
import Donate from "../Donate/Donate";
import Button from "../Button/Button";

function NavBar() {
    return(
        <HashRouter>

            <div className="NavBar-Container">

                <div className="Logo-Container">
                     <li className="logo"><img src={LogoImage} alt="Logo" /></li>
                </div> 
        
                <ul className="NavBar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/graywhale#whaleSec">The Gray Whales</NavLink></li>
                    <li><NavLink to="/tripsummaries">Trip Summaries</NavLink></li>
                    <li><NavLink to="/contact">Our Store</NavLink></li>
                    <li><NavLink to="/donate">Donate</NavLink></li>
                </ul>

                <div className="Button-Container">
                    <Button text="DONATE" />
                </div>
  

            </div>
    



           <div className="content">
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route path="/contact" Component={Contact}/>
                    <Route path="/donate" Component={Donate}/>
                </Routes>
            </div>
        </HashRouter>

    );


}

export default NavBar;
