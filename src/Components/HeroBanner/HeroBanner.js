import react from "react";
import BannerImage from "./GrayWhaleIntro.jpg";
import "./HeroBanner.css";

function HeroBanner({title, subtitle, intropar}) {

    const bannerStyle = {
        backgroundImage: `url(${BannerImage})`,
    };  

    return (
        <div className="hero-banner" style={bannerStyle}>
            <div className="hero-content">

                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{intropar}</p>

            </div>
        </div>      
    );
}//end HeroBanner

export default HeroBanner;