import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../css/About.css"
import masai from "../Images/masailogo.jpg"
import mmit from "../Images/mmitlogo.jpg"


export const About = () => {

  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, [])



  return (
    <div >
      <div className="aboutebox " id='aboutme' >
        <h1>ＡＢＯＵＴ</h1>
        {/* <video   className="aboutevideo" src={background} autoPlay loop muted/> */}
        <div className="abtcontent " >
          <div className={'coderanimation'} data-aos="slide-right">
            <img src="https://www.techbabble.zone/content/images/2021/07/46207-programmer-1.gif" alt="" />
          </div>
          <div className={"box"} >
            <p className='disc' data-aos='fade-top' data-aos-duration='1500'>
              Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1200+ hours of Bootcamp structure learning JavaScript, Node.Js, React, Redux, MongoDB, Express, HTML5, and CSS3.
            </p>
          </div>
        </div>
      </div>
      <div className='education'>
        <h1>ＥＤＵＣＡＴＩＯＮ</h1>
        <div className='educards'>
          <div className='edu-card'>
            <div style={{ display: "flex" }}><img src={masai} alt="" />
              <div>
                <h1>Masai School, Bangalore</h1>
                <h3>Full Stack Web Development</h3>
                <br />
                <div className='duration'>
                  <p>APRIL 2022 - FEBRUARY 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className='edu-card'>
            <div style={{ display: "flex" }}><img src={mmit} alt="" />
              <div>
                <h1>MMIT, Pune</h1>
                <h3> Bachelors in Engineering</h3>
                <br />
                <div className='edudetails'>
                <div className='duration'>
                  <p>JUNE 2013 - JULY 2017</p>
                </div>
                <div className='grade'>
                  <p>DISTINCTION</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}