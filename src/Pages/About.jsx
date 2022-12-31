import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import  "../css/About.css"


export const About = () => {

  useEffect(() => {
    AOS.init({duration:"1500"});
  }, [])


  
  return (
    <div >
      <div  className="aboutebox" id='aboutme' >
      <h1>ＡＢＯＵＴ</h1>
        {/* <video   className="aboutevideo" src={background} autoPlay loop muted/> */}
       <div className="abtcontent " >
       <div className={'coderanimation'} data-aos="slide-right">
          <img src="https://www.techbabble.zone/content/images/2021/07/46207-programmer-1.gif" alt="" />
        </div>
        <div className={"box"} >
          <p className='disc' data-aos='fade-left' data-aos-duration='1500'>
          Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1200+ hours of Bootcamp structure learning JavaScript, Node.Js, React, Redux, MongoDB, Express, HTML5, and CSS3.
            </p>
        </div>
       </div>
      </div>
    </div>
  );

}