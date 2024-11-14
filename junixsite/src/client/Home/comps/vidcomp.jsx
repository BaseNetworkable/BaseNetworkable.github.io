import React from "react";
import videoHome from "../assets/presentation.mp4";
import "./vidcomp.css";

class VideoHome extends React.Component {
  
    render() {
      return (
        <video className="selfvideo" src={videoHome} autoPlay loop muted/>
      );
    }
  }


export default VideoHome
