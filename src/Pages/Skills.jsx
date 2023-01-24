import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import "../css/Skills.css"
// import Calendor from '../Components/Calendor';
// import Statistics from '../Components/Statistics';
function Skills() {

  
  return (
    <div className="skillsbox" id='skills'>
      
      <h1>ＳＫＩＬＬＳ ＆ ＴＯＯＬＳ</h1>
      <div className="gridbox">
        <div className='skillcard'  >
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt='err'/>
          <p>HTML 5</p>
        </div>
        <div  className='skillcard' >
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt='err'/>
        <p>CSS</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt='err'/>
        <p>JavaScript</p>
        </div>
        <div  className='skillcard' >
        <img   src="	https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt='err'/>
        <p>React.js</p>
        </div>
        <div className='skillcard'  >
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt='err'/>
        <p>Redux</p>
        </div >
        <div  className='skillcard'  >
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt='err'/>
        <p>Node.js</p>
        </div>
        <div  className='skillcard'  style={{display:"block",justifyContent:'space-between'}}>
        <img style={{height:"40%",marginTop:"20%"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU" alt='err'/>
        <p style={{marginTop:"20%"}}>Express.js</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt='err'/>
        <p>MongoDB</p>
        </div>
        <div  className='skillcard' >
        <img   src="	https://code.visualstudio.com/assets/images/code-stable.png" alt='err'/>
        <p>Vs-Code</p>
        </div>
        <div  className='skillcard'  >
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt='err'/>
        <p>Git</p>
        </div>
   
      </div>
    
   {/* <Statistics/>
     <Calendor/> */}
     
      </div>
  )
}

export default Skills