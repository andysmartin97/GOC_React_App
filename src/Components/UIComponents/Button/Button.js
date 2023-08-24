import react from "react";
import "./Button.css";

export default function Button ({text}){
    return(
        <button className="custom-button" >
            {text}
        </button>
    );
}