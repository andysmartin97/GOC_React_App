import react from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.css";


export default function ButtonLink ({text, to}){
    return(

        <Link to={to} className="custom-LinkButton">
            {text}
        </Link>
       
    );
}