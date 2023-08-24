import react from "react";
import TextBlock from "../UIComponents/TextBlock/TextBlock";
import "./IntroSection.css"


export default function IntroSection({title,paragraph}) {

    return(
        <div className="IntroSect">

            <div className="Intro-TextContainer">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>


            <div className="Intro-BoxContainer">
        
                <div className="BoxContentIntro">
                    <TextBlock
                        title="The Master Plan"
                        paragraph="Our mission is to create a hands-on opportunity for students 
                        to engage with their marine environment. By providing a unique and 
                        memorable experience on the water, we inspire students toward ocean 
                        stewardship and future involvement in activities that promote 
                        environmental awareness and conservation."
                    />
                </div>

                <div className="BoxContentIntro">
                    <TextBlock
                        title="In-Depth Search"
                        paragraph="Our project is unique in two important ways. First, we work with
                        school districts to provide a unique wildlife experience to 1600 students
                        per year who would not otherwise experience their natural marine world."
                    />      
                </div>

                <div className="BoxContentIntro">
                    <TextBlock
                        title="General Information"
                        paragraph="The California Gray Whale is a baleen whale that endures the longest 
                        annual migration (~20,000 miles!) of any mammal on Earth. Gray Whales live to 
                        be 50-70 years old and can reach a length of about 50 ft. Every October, around 
                        20,000 Gray Whales leave the Bering and Chukchi Seas of Alaska and head 
                        down the Pacific Coast to birth calves and find mates in the warm lagoons of Baja, Mexico."
                    />                   
                </div>

            </div>
  
        </div>

       


    );

}// end IntroParagraph

