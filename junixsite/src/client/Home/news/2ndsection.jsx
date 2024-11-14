import React from "react";
import "./2ndsection.css";
import ScrollAnimation from "../comps/competencies";


class Secondsection extends React.Component {
  
    render() {
      return (
       <>
       
<div className='secondpsectionwrapper'>
  <div className="secondpsection">
    <ScrollAnimation></ScrollAnimation>
  </div>
</div>
       </>
      );
    }
  }


export default Secondsection
