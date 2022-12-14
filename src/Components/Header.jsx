import { Button, Icon, Image } from "@chakra-ui/react";
import React from "react";
import '../Styles/global.css';
import Typewriter from "typewriter-effect"
import  {RiFileUserLine}  from 'react-icons/ri'
import myimage from "../Styles/myimage.png"
import Sammyak_MERN_Resume1 from "../Resume/Sammyak_Deosale_Mern_Developer_Resume.pdf"
import { SiLinkedin } from "react-icons/si";

export default function Header() {
    return (
        <header>
            {/* <NavBar /> */}
            <div className="header flex light-bg">
                <div className="content">
                    <h1 className="white">Hi,</h1>
                       <h1 className="white fontsty" style={{fontSize:"30px"}}>I am Sammyak Deosale <span className="typewr" style={{color:"orange"}}><Typewriter  options={{
                             autoStart:true,
                            loop:true,
                            delay:50,
                            strings:[
                            "Full Stack Web Developer"]
                                }}/></span> </h1>
                    
                    <h4 className="gray fontsty" style={{fontSize:"25   px"}}>I would love to practice and use my skills to help an organisation uplift by truly folllowing the phrase "Rise by lifting others".</h4>
                    <br />
                    <a href={Sammyak_MERN_Resume1} style={{textDecoration:"none"}} download><Button style={{fontSize:"20px" ,width:"250px"}} variant='outline' justifyContent={"space-evenly"} color={"white"}><Icon as={RiFileUserLine} w={6} h={6}/>My Resume</Button>
                    </a>
                    <div className="headicons"></div>
                    <br />
                </div>
                <Image className="sammyakimg" style={{ borderRadius:"15%" }} src={myimage}  alt="sammyak"  />
            </div>
            <div className="moddiv"></div>
        </header>
    )
}