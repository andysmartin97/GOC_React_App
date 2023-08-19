import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import VirtualTourPic from "./ComputerTourPic.png";
import "./VirtualTourSection.css"

export default function VirtualTourSection () {

    return (
        <div className="VirtualTour-Container">

            <TextBlock
                title="Virtual Whale Watching Tour"
                paragraph="Embark on an extraordinary virtual adventure from the 
                comfort of your own home with our immersive gray whale watching experience. 
                Our virtual tours bring the wonders of the ocean directly to you, 
                as you journey alongside our expert guides to explore the fascinating world of 
                gray whales."

            />

            <img className="VirtualPic" src={VirtualTourPic} alt="A person enjoying a virtual tour on a computer laptop"/>
       
       
        </div>


    );

}