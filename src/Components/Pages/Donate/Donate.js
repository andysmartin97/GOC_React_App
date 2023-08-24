import React, {Component} from "react";
import "./Donate.css";
import Footer from "../../Footer/Footer";
import Button from "../../UIComponents/Button/Button";
import ButtonLink from "../../UIComponents/ButtonLink/ButtonLink";

class Donate extends Component {
    render() {
        return (
            <div className="DonateSection-Container">

                <div className="DonationState-Cont">

                    <h1>Make A Donation</h1>
                    <h2>You Have the Power to Help Us Make A Difference!</h2>

                    <br/>
            
                    <p>The Gulf of Catalina Gray Whale Preservation & Education Foundation (GWF) is 
                    reaching out to you for your help in not only protecting and preserving this special 
                    species, but we are also asking for your assistance in helping us to educate children 
                    on the importance of this species
                    
                    <br/>
                    <br/>

                    There are many costs involved in a program such as this, and we are asking 
                    for your assistance in helping us achieve our goals so that we may open a 
                    new world of education and adventure to children from all walks of life.

                    <br/>
                    <br/>
                    
                    You can make a quick donation using your prefered method of payment such as 
                    Apple Pay, Samgsung Pay, or Paypal</p>

                    <br/>
                    <br/>

                    <Button text="MAKE A QUICK DONATION"></Button>
                    
                    <br/>
                    <br/>
                    <br/>
                    <p>If you would like to send a donation by mail:
                    Please make check payable to <strong><em>The Gulf of Catalina Gray Whale Preservation & Education Foundation
                    Mail to 2311 Calle La Serna, San Clemente, CA 92672</em> </strong></p>
                    
                </div>


                <div className="footer">

                    <Footer/>

                </div>

            </div>
            

        )

    }

} 

export default Donate;