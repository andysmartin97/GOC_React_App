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

function NavBar() {
    return(
        <HashRouter>
             <ul className="NavBar">              
                <li className="logo"><img src={LogoImage} alt="Logo" /></li> 
                <li><NavLink to="/">HomeDebug</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/graywhale#whaleSec">The Gray Whales</NavLink></li>
                <li><NavLink to="/tripsummaries">Trip Summaries</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/donate">Donate</NavLink></li>
            </ul>

           <div className="content">
                <Routes>
                    <Route exact path="/" Component={Home}/>
                
                </Routes>
            </div>
        </HashRouter>

    );


}

export default NavBar;
