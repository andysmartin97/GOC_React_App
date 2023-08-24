import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import "./ExperiencesSection.css"
import "./ExperiencesSectionAni.js"

export default function ExperiencesSection({title,paragraph}) {
    return(
        <div className="Experiences-Container">

            <div className="Title-Container">
                <h2>Testimonials</h2>
            </div>


            <div className="TextBlock-Container">

                <TextBlock
                    title="Review from Lincoln Elementary School (In-Person Tour):"
                    paragraph={`"The in-person tour by the Gulf of Catalina 
                    Gray Whale Preservation & Education Foundation was an awe-inspiring 
                    experience for our students. The knowledgeable guides engaged them 
                    with fascinating insights into gray whale behaviors and marine conservation. - Principal Thompson, Lincoln Elementary School"`}
                />

                <TextBlock
                    title="Review from West High School (In-Person Tour):"
                    paragraph={`"Our high school students had a truly transformative experience during 
                    the in-person whale watching tour. This educational trip was nothing short of exceptional, and we are grateful 
                    for the foundation's dedication to inspiring the next generation of environmentalists." 
                    - Science Teacher Martinez, West High School`}
                />

                <TextBlock
                    title="Review from Maple Grove Middle School (Virtual Tour):"
                    paragraph={`"The virtual whale watching tour brought marine wonders right into our classroom. 
                    The engaging 360-degree videos and live Q&A with marine experts made it a 
                    captivating and educational experience for our students." - Teacher Johnson, Maple Grove Middle School`}
                />

            </div>


        </div>


    );

}

