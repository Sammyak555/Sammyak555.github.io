import React from 'react'
import "../css/Skills.css"
// import Calendor from '../Components/Calendor';
// import Statistics from '../Components/Statistics';
function Skills() {
  return (
    <div className="skillsbox" id='skills'>
       <div className='skillfake'></div>
      <h1>My Skills</h1>
      <div className="gridbox">
        <div className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt='err'/>
          <p>HTML 5</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt='err'/>
        <p>CSS</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt='err'/>
        <p>JavaScript</p>
        </div>
        <div  className='skillcard'>
        <img   src="	https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt='err'/>
        <p>React.js</p>
        </div>
        <div className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt='err'/>
        <p>Redux</p>
        </div >
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt='err'/>
        <p>Node.js</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU" alt='err'/>
        <p>Express.js</p>
        </div>
        <div  className='skillcard'>
        <img   src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt='err'/>
        <p>MongoDB</p>
        </div>
        <div  className='skillcard'>
        <img   src="	https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg" alt='err'/>
        <p>FireBox</p>
        </div>
        <div  className='skillcard'>
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