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
          <p className='disc' data-aos='zoom-in' data-aos-duration='3000'>
            My name is Sammyak. I'm a full-stack web-developer based in Masai School, Benguluru. I am a B.Tech graduate and love exploring new technologies in the field of Web Development and always try to adapt to it. I believe in the concept of continuous learning by regularly upgrading my skills and enhancing my knowledge. I have learned MERN stack, data structures, algorithms, and soft skills at Masai School. And besides coding, I love traveling, singing and cooking As a developer, my hunger for learning has drastically increased and I want to centralize my skills and learning for enhancement of an organization and more of it, to enhance my career.
          </p>
        </div>
       </div>
      </div>
    </div>
  );

}