import React from "react";

import "./Footer.css"
import SocMedButtons from "./SocialMediaButtons.png"

export default function Footer() {

    return(
        <div className="Footer-Container">
        
            <img src={SocMedButtons}></img>

            <footer>Copyright © 2023 The Gulf of Catalina Gray Whale Preservation & Education Foundation | All Rights Reserved </footer>
           
            <p>Privacy Policy & Terms of Use</p>

        </div>


    );


}
