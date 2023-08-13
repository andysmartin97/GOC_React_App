import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import WhalePic from "./whalePic..jpg";
import "./WhaleSection.css";



export default function WhaleSection() {
    return (
    
        <div className="WhaleSection-container">
            
            <TextBlock
                title="The Gray Whale"
                paragraph="The gray whale, (Eschrichtius robustus), is a baleen whale that
                migrates between feeding and breeding grounds yearly. It reaches a length 
                of about 15.2 m (50 ft), a weight of 36 tonnes (35 long tons; 40 short tons), and lives 50-70 years.
                The common name of the whale comes from the gray patches and white 
                mottling on its dark skin."

            />
            <img src={WhalePic}></img>



        </div>
   


    );
  }