
import React from "react";
import "./TextBlockPic.css";
import TextBlock from "../TextBlock/TextBlock";

export default function TextBlockPic({ title, paragraph, image, alt }) {

    return (

        <div className="TextBlockPic-Container">

            <div className="TextBlockPic-Text">
                <TextBlock title={title} paragraph={paragraph} />
            </div>

            <div className="TextBlock-Image">
                {image && <img className="TextBlock-image" src={image} alt={alt} />}
            </div>

        </div>
    );
}
