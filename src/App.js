
import './Styles/global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import  Skills  from './Pages/Skills';
import { Projects } from './Pages/Projects';
import Contact from './Pages/Contact';

import Statistics from './Pages/Statistics';

import { About } from './Pages/About';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from './Pages/GitCalender';
import { AllRoutes } from './Components/AllRoutes';

function App() {
  
  
  return (
    <div className="App">
      <Navbar />
      <div >
      <Header/></div>
      <div className='boxes'>
      <About/></div>
      <div >
      <Projects/></div>
     <div className='boxes'>
     <Skills/>
     </div>
     {/* <Calendar/> */}
     <div className='boxes'>
     <Statistics /></div>
     <div className='boxes'>
     <Contact/></div>
     <AllRoutes />
    </div>
    
  );
}

export default App;
