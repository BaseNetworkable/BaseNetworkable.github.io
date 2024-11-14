import React from "react";
import prealoadlogo from "./preloadlogo.png"
import "./Preloader.css"

const PreLoader = () =>{
    
    return(

    <div className="preloadcontainer">
        <img className="preloadlogo" src={prealoadlogo} alt ="" style={{display: "flex",
    height: "fit-content",
    width: "50%",
    margin: "0 auto",
    justifyContent: "center",
 }} loading="lazy"/>
    </div>
)
}

export default PreLoader