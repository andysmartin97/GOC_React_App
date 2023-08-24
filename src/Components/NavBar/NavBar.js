import React from "react";
import {
    Router,
    Route,
    Routes,
    NavLink,
    HashRouter,
    
} from "react-router-dom";

import {Link, Element} from 'react-scroll';


import LogoImage from './logo.png';

import Home from '../Home/Home';
import Contact from "../Contact/Contact";

import Store from "../Pages/Store/Store";
import Donate from "../Pages/Store/Donate/Donate";
import Button from "../UIComponents/Button/Button";
import ButtonLink from "../UIComponents/ButtonLink/ButtonLink";

function NavBar() {
    return(
        <HashRouter>

            <div className="NavBar-Container">

                <div className="Logo-Container">
                     <li className="logo"><img src={LogoImage} alt="Logo" /></li>
                </div> 
        
                <ul className="NavBar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to="about" smooth={true}>About</Link></li>
                    <li><Link to="whaleSec" smooth={true}>The Gray Whales</Link></li>
                    <li><Link to="inperson" smooth={true}>In-Person Tour</Link></li>
                    <li><Link to="virtual" smooth={true}>Virtual Tours</Link></li>
                    <li><Link to="testimonials" smooth={true}>Testimonials</Link></li>
                    <li><NavLink to="/store">Our Store</NavLink></li>
                </ul>

                <div className="Button-Container">           
                    <ButtonLink text="DONATE" to="/donate"></ButtonLink>
                </div>

            </div>

           <div className="content">
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route path="/store" Component={Store}/>
                    <Route path="/donate" Component={Donate}/>
                </Routes>
            </div>
        </HashRouter>

    );


}

export default NavBar;
