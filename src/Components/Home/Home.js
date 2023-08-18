import React, {Component} from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import IntroSection from "../IntroSection/IntroSection";
import WhaleSection from "../WhaleSection/WhaleSection";
import InPersonSection from "../InPersonSection/InPersonSection";
import VirtualTourSection from "../VirualTourSection/VirtualTourSection";
import ExperiencesSection from "../ExperiencesSection/ExperiencesSection";
import OurStoreSection from "../OurStoreSection/OurStoreSection";

class Home extends Component{
    render() {
        return(
            
            
            <div className="HomeContent">

                <HeroBanner
                    title="The Gulf of Catalina Gray Whale"
                    subtitle="Preservation and Education Foundation"
                    intropar="Our ultimate goal is to create a student education program that is funded solely by the private sector. Our mission is to create first-hand one-on-one experience for students and their environment."
                />

                <IntroSection 
                    title="About Our Foundation"
                    paragraph="The Gulf of Catalina Gray Whale Preservation & Education Foundation (GWF) educates children on the importance of
                    the Gray Whale by creating an opportunity for students to engage in research.
                    We are a non-profit organization led by scientists, naturalists, and educators whose goal it is to protect our
                    environment and inspire future generations of environmentalists, scientists, and ocean stewards.
                    "

                    //boxes with 3 more content is added here more about them on the IntroSection file
                />

                <section id="whaleSec">
                    <WhaleSection/>
                </section>


                <InPersonSection/>

                <VirtualTourSection/>   

                <ExperiencesSection/>

                <OurStoreSection/>

        



                <p>Copyright © 2023 The Gulf of Catalina Gray Whale Preservation & Education Foundation | All Rights Reserved
Privacy Policy & Terms of Use</p>

                

            </div>



        );
    }

}

export default Home;