import { background, Button, Icon, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import '../Styles/global.css';
import Typewriter from "typewriter-effect"
import  {RiFileUserLine}  from 'react-icons/ri'
import myimage from "../Styles/myimage.png"
import Sammyak_MERN_Resume1 from "../Resume/Sammyak_MERN_Resume1.pdf"

export default function Header() {
        const [state]=useState({
          title:"Hellow",
          titletwo:"I'm",
          titlethree:"Full Stack Web Developer",
        
      })
    return (
        <header>
            {/* <NavBar /> */}
            <div className="header flex light-bg">
                <div className="content">
                    <h1 className="white">Hi 👋,</h1>
                       <h1 className="white fontsty" style={{fontSize:"30px"}}>I am Sammyak Deosale <span className="typewr" style={{color:"yellow"}}><Typewriter  options={{
                             autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                            "Full Stack Web Developer"]
                                }}/></span> </h1>
                       <h1></h1>
                    <br />
                    
                    <h4 className="gray" style={{fontSize:"25   px"}}>I design and code beautiful things, and I love what I do.</h4>
                    <br />
                    <a href={Sammyak_MERN_Resume1} style={{textDecoration:"none"}} download><Button style={{fontSize:"20px" ,width:"250px"}} variant='outline' justifyContent={"space-evenly"} color={"white"}><Icon as={RiFileUserLine} w={6} h={6}/>My Resume</Button>
                    </a>
                    <br />
                </div>
                <Image className="sammyakimg" style={{ borderRadius:"27%" ,backgroundColor:"rgb(69, 124, 178)"}} src={myimage}  alt="sammyak"  />
            </div>
            
        </header>
    )
}