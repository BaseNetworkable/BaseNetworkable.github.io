import React, { useEffect } from 'react';
import { useState } from "react";
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import Home from '../client/Home/Home';
import About from '../client/About/About';
import './App.css';
import homelogo from "./assets/homelogo.png";
import certificate from "./assets/certificate.png";
import cl from 'classnames';
import Footer from './comps/Footer.jsx';
import PreLoader from './comps/Preloader.js';
import logotip3 from './assets/contacts.png';
import Contacts from '../client/Contacts/Contacts.js';






const navigation1 = [
  {
    id: 1,
    to: '/homepage',
    title: 'Home',
    img:''
  }
]
const navigation2 = [
{
  id: 2,
  to: '/about',
  title: 'About',
  img:''  
}
]
const navigation3 =[
{
  id: 2,
  to: '/contacts',
  title: 'Contacts',
  img:''  
}]







const App = () => {
  const { pathname } = useLocation();
  console.log(useLocation())
  
//loader state
const [isLoading, zagruzka] = useState (true);

  useEffect(()=>{
    
    const fakeDataFetch = () =>{
      setTimeout( () =>{ zagruzka(false);},1500)
    }
    fakeDataFetch();
    
  },[])    
 
  return   isLoading ? ( <PreLoader/> ) : 
  (

      
    <main className='allwrapper'>

    
    
  <Switch>
    <Route  exact={true} path="/homepage"  component={Home} />
    <Route exact={true} path="/about" component={About} />
    <Route exact={true} path="/contacts" component={Contacts} />
    
  </Switch>

  <nav className='Smenu'>
          {navigation1.map(({id, to, img, title}) => (

          <Link 
              key={id}  
              to={to}
              className={"MenuItems"+ ' ' + cl(pathname === to  && 'active' ) } >
              <img className='homelogomenu' src={homelogo}/>
          </Link>
        
          ))}

<h1 className='menutext'>JUNIX.RU</h1>

            {navigation2.map(({id, to, img, title}) => (
              
            <Link
            
              key={id}  
              to={to}
              className={"MenuItems2"+ ' ' + cl(pathname === to  && 'active2' ) } >
             
               <img className='homelogomenu' src={certificate}/>
              
             
              
              
             </Link>
            
          ))}
  <h1 className='menutext2'>Сертификаты</h1>
 

            {navigation3.map(({id, to, img, title}) => (
              
            <Link
            
              key={id}  
              to={to}
              className={"MenuItems2"+ ' ' + cl(pathname === to  && 'active2' ) } >
             
               <img className='homelogomenu2' src={logotip3}/>
              
             
              
              
             </Link>
            
          ))}
           <h1 className='menutext2'>Контакты</h1>
    </nav>
  <Footer></Footer>

 

</main>    

      
      

  );
};

export default App;
