import React from "react";
import IntroCard from "../IntroCard/IntroCard";
import "./OurStoreSection.css";
import image1 from "./store01.jpg";
import image2 from "./store02.png";
import image3 from "./store03.jpg";
import image4 from "./store04.jpg";
import image5 from "./store05.jpg";
import Button from "../Button/Button";

export default function OurStoreSection(){
    return(
        <div className="OurStore-Container">
            

            <div className="StoreIntro-Container">
                <IntroCard
                    title="Our Store"
                    paragraph="Discover a treasure trove of marine-inspired merchandise that makes a difference.
                    Our Merch Store offers a curated selection of eco-friendly products, each designed to showcase your 
                    love for marine life and support gray whale research and conservation. Every purchase contributes to our mission,
                    as a percentage of proceeds goes directly towards research and the care of these majestic creatures. 
                    Shop with purpose and wear your passion for the oceans proudly!"
                />


            </div>

            <div className="StoreButton-Container" >

                <Button text="VISIT STORE"/>

            </div>
       
 

            <div className="row">

                <div className="Images-Container" >
                    
                    <img src={image1}/>
                    <img src={image2}/>
                    <img src={image3}/>
                    <img src={image4}/>
                    <img src={image5}/>


                </div>

            </div>






        </div>


    );
    
}