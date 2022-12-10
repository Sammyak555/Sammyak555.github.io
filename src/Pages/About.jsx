import "../css/About.css"
// import background from "../download/background.mov"

export const About=()=>{
 
    return(
        <div >
            <div className="aboutebox" id='aboutme'>
      {/* <video   className="aboutevideo" src={background} autoPlay loop muted/> */}
      <div className="fake"></div>
      <h1>About Me</h1>
    <div className='box' >
      <p className='disc'>
      My name is Sammyak. I'm a full-stack web-developer based in Masai School, Benguluru. I am a B.Tech graduate and love exploring new technologies in the field of Web Development and always try to adapt to it. I believe in the concept of continuous learning by regularly upgrading my skills and enhancing my knowledge. I have learned MERN stack, data structures, algorithms, and soft skills at Masai School. And besides coding, I love traveling, singing and cooking As a developer, my hunger for learning has drastically increased and I want to centralize my skills and learning for enhancement of an organization and more of it, to enhance my career.
      </p>
    </div>
    </div>
        </div>
    );
    
}