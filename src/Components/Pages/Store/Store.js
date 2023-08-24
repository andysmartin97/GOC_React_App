import React from "react";

import "./Store.css"
import Footer from "../../Footer/Footer";


import store01 from "../../OurStoreSection/store01.jpg";
import store02 from "../../OurStoreSection/store02.png";
import store03 from "../../OurStoreSection/store03.jpg";
import store04 from "../../OurStoreSection/store04.jpg";
import store05 from "../../OurStoreSection/store05.jpg";

export default function Store() {
    return(
        
        <div className="Store-Container">

            <div className="StoreContent-Container">

                <h1>Our Store</h1>

                <h2>We are proud of our new store !</h2>

                <p> Comming soon you will be able to help us even more
                    with our cause. Feel free to see .what we will be 
                    offering in the future.
                </p>

            </div>

            <div className="PictureSection-Container" >

                <div className="PicturesStore-Container">
                    <div className="Row1">
                        
                        <img src={store01}/>
                        <img src={store02}/>
                        <img src={store03}/>
                    </div>

                    <div className="Row2">
                        <img src={store04}/>
                        <img src={store05}/>


                    </div>

                </div>

            </div>


            

      




           

          

        </div>

    );
}