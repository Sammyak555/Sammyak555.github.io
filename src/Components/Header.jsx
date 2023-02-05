import { Button, Icon, Image } from "@chakra-ui/react";
import React from "react";
import '../Styles/global.css';
import Typewriter from "typewriter-effect"
import  {RiFileUserLine}  from 'react-icons/ri'
import myimage from "../Styles/myimage.png"
import Sammyak_MERN_Resume1 from "../Resume/fw19_1004_sammyak_deosale_Resume.pdf"
import { SiLinkedin } from "react-icons/si";

export default function Header() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(Sammyak_MERN_Resume1).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Sammyak_MERN_Resume1;
                alink.click();
            })
        })
    }
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
                    <a href='https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing' style={{textDecoration:"none"}} target={'_blank'}><Button  _hover={{ bg: 'gray.700' }} style={{fontSize:"20px" ,width:"250px"}} variant='outline' justifyContent={"space-evenly"} color={"white"} onClick={onButtonClick}><Icon as={RiFileUserLine} w={6} h={6}/>My Resume</Button>
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