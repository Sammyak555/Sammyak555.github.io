import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import "../css/Skills.css"
// import Calendor from '../Components/Calendor';
// import Statistics from '../Components/Statistics';
function Skills() {


  return (
    <div className="skillsbox" id='skills'>

      <h1>ＳＫＩＬＬＳ </h1>
      <div className="gridbox">
        <div className='skillcard'  >
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt='err' />
          <p>HTML 5</p>
        </div>
        <div className='skillcard' >
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt='err' />
          <p>CSS</p>
        </div>
        <div className='skillcard'>
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt='err' />
          <p>JavaScript</p>
        </div>
        <div className='skillcard'  >
          <img src="https://i.imgur.com/T2ZnBHn.png" alt='err' />
          <p>TypeScript</p>
        </div>
        <div className='skillcard' >
          <img src="	https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt='err' />
          <p>React.js</p>
        </div>
        <div className='skillcard'  >
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt='err' />
          <p>Redux</p>
        </div >
        <div className='skillcard'  >
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt='err' />
          <p>Node.js</p>
        </div>
        <div className='skillcard' style={{ display: "block", justifyContent: 'space-between' }}>
          <img style={{ height: "40%", marginTop: "20%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU" alt='err' />
          <p style={{ marginTop: "20%" }}>Express.js</p>
        </div>
        <div className='skillcard'>
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt='err' />
          <p>MongoDB</p>
        </div>
        
      </div>
        <br />
      <h1> ＴＯＯＬＳ</h1>
      <div className="gridbox">
        <div className='skillcard'  >
          <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/21d6d10cc01431996f55d9e23640fde56a7e1574/icons/github.svg" alt='err' />
          <p>GitHub</p>
        </div>
        <div className='skillcard'  >
          <img src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt='err' />
          <p>Git</p>
        </div>
        <div className='skillcard'  >
          <img style={{ width: "70%" }} src="	https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg" alt='err' />
          <p>Npm</p>
        </div >
        <div className='skillcard'>
          <img src="https://raveenakale475.github.io/static/media/netlify.ff9a6cf8b6be147ca675.png" alt='err' />
          <p>Netlify</p>
        </div>
        <div className='skillcard' >
          <img src="https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67" alt='err' />
          <p>Chakra Ui</p>
        </div>
        <div className='skillcard'  >
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt='err' />
          <p>Postman</p>
        </div>
        <div className='skillcard' >
          <img src="	https://code.visualstudio.com/assets/images/code-stable.png" alt='err' />
          <p>Vs-Code</p>
        </div>
        <div className='skillcard'  >
          <img src="https://raveenakale475.github.io/static/media/veercel.6d176e7fc85917a641d0.ico" alt='err' />
          <p>Vercel</p>
        </div>

      </div>

      {/* <Statistics/>
     <Calendor/> */}

    </div>
  )
}

export default Skills