import { Button, Icon, Image } from "@chakra-ui/react";
import React from "react";
import '../Styles/global.css';
import Typewriter from "typewriter-effect"
import { RiFileUserLine } from 'react-icons/ri'
import myimage from "../Styles/myimage.png"
import Sammyak_MERN_Resume1 from "../Resume/fw19_1004-Sammyak-Deosale-Resume.pdf"
<link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Sacramento&display=swap" rel="stylesheet"></link>


export default function Header() {
    const onButtonClick = () => {
        window.open('https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing')
    }
    return (
        <header>
            {/* <NavBar /> */}
            <div className="header flex light-bg">
                <div className="content">
                    <h1 className="white">Hi,</h1>
                    <h1 className="white fontsty" style={{ fontSize: "41px", position: 'relative', fontFamily: 'Sacramento' }}><span style={{ color: 'orange' }}>Sammyak </span> Deosale <span className="typewr" ><Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: [
                            "Full Stack Web Developer"]
                    }} /></span> </h1>

                    <h4 className="gray fontsty" style={{ fontSize: "25   px" }}>I would love to practice and use my skills to help an organisation uplift by truly folllowing the phrase "Rise by lifting others".</h4>
                    <br />
                    <a href={Sammyak_MERN_Resume1} download={true} style={{ textDecoration: "none" }} target={'_blank'}><Button _hover={{ bg: 'gray.700' }} style={{ fontSize: "20px", width: "250px" }} variant='outline' justifyContent={"space-evenly"} color={"white"} onClick={onButtonClick}><Icon as={RiFileUserLine} w={6} h={6} />My Resume</Button>
                    </a>
                    <div className="headicons"></div>
                    <br />
                </div>
                <Image className="sammyakimg" style={{ borderRadius: "50%" }} src={myimage} alt="sammyak" />
            </div>
            <div className="moddiv"></div>
        </header>
    )
}