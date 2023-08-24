    import React from "react";
    import TextBlock from "../TextBlock/TextBlock"
    import "./InPersonSection.css"
    import InPerPic from "./InPersonPic.png"
    import Button from "../Button/Button";








    export default function InPersonSection() {
        
    // Define handleClick at this level, not inside another component
  

        return(

            <div className="InPerson-Container">
                <div className="TextBlockPar-Container">
                    <TextBlock 
                        title="Our In-Person Tour"
                        paragraph="Embark on an unforgettable journey into the heart of 
                        marine wonder with our in-person whale watching tours. Join our
                        experienced team of naturalists and scientists as we set sail
                        to witness the awe-inspiring migration of majestic gray whales. Get up 
                        close and personal with these magnificent creatures in
                        their natural habitat, where they engage in breaching,
                        tail slapping, and nurturing their calves."
                            
                    >

                        
                    </TextBlock>

                       
                    <div className="Button-Container">
                        <Button text="TALK TO A REPRESENTATIVE"  />
                    </div>

                </div>


                <img className="InPersonPic" src={InPerPic} alt="pictures of in-person whale watch tour"/>

         

            </div>



        );

    }