import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../Styles.css"; 
import {Helmet}from "react-helmet";
import frame from "../assets/frame.png"


function ScrollAnimation(){
useEffect(()=>{
    AOS.init();


},  []);


return(

<>
    <div data-aos="zoom-in-up" data-aos-duration="250"  >
        <span className="SectionTitle">Наши компетенции:</span>    
    </div>
    <div className="standardiv" data-aos="zoom-out" data-aos-duration="250" data-aos-delay="0" >
          <div id="compimg1" className="compimg">
             <p1 className="imgtitle1" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0" >Строительство зданий и сооружений I и II уровня ответственности</p1>
          </div>
          <div className="compimg">
             <p1 className="imgtitle2" data-aos="zoom-out" data-aos-duration="550" data-aos-delay="0" >Осуществление функций генерального подрядчика в промышленном строительстве</p1>
          </div>
         
          <div className="compimg">
             <p1 className="imgtitle3" data-aos="zoom-out" data-aos-duration="600" data-aos-delay="0" >Работа по ЕРС-контрактам</p1>
         </div>
          <div className="compimg">
            <p1 className="imgtitle4" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0" >Организация и инжиниринг полного цикла строительных работ: от проектирования до сдачи объекта в эксплуатацию</p1>
          </div>
    </div>  
</>

)
}


export default ScrollAnimation