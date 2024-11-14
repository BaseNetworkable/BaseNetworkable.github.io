import React from 'react';
import './Home.css';
import Logo01 from "./assets/Logo01.png";
import VideoHome from "./comps/vidcomp.jsx"
import Divider from "./comps/divider.jsx";
import Secondsection from './news/2ndsection.jsx';

class Home extends React.Component {
  
  render() {
    return (
<div className='wrapperhome'>
<VideoHome/>       
      <div className='logoinside' onMouseEnter={()=>(document.getElementById("logoinside1").classList.add('Logoanim')) && (document.getElementById("logoinside1").style.animation = "padding 1 1s")} onMouseLeave={()=> (document.getElementById("logoinside1").classList.remove('Logoanim'))}>
        <img id="logoinside1" className="Logo"  src={Logo01}  alt="Junix" />
</div>
<Secondsection/>
      </div>
    );
  }
}

export default Home;
