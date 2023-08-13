import React from "react";
import "./IntroCard.css"


export default function IntroCard({title,paragraph}){
   return(

        <div className="Title-Card">
            <h3>{title}</h3>
            <p>{paragraph}</p>


        </div>


   ); 


}