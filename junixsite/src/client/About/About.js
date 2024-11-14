import React from 'react';
import './About.css';
import Divider from '../Home/comps/divider';
import svarka from "./assets/svarka.jpg"



class About extends React.Component {
  render() {
    const gilroy= "gilroy";
    const About = "about";
    return (
      <>
      <div className={About +' '+ gilroy}>
        <div className='wrapperimg'>
          <img id="img1" src={svarka}></img>
          <h6>Вакансии</h6>
          <p>Ищем новых специалистов</p>
        </div>
        <div className='wrappervac'>
          <div>Див</div>
          <div>Текстовый див</div>
        </div>
      </div>
      </>
    );
  }
}

export default About;
