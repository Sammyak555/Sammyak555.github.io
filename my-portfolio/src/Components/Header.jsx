import { background, Image } from "@chakra-ui/react";
import React from "react";
import { Skills } from "../Pages/Skills";
import '../Styles/global.css';



export default function Header() {
    return (
        <header>
            {/* <NavBar /> */}
            <div className="header flex light-bg">
                <div>
                    <h1 className="white">Hi 👋,</h1>
                       <h1 className="white" style={{fontSize:"30px"}}>I am Sammyak Deosale Aspiring Full-Stack Web Developer.</h1>
                    <br />
                    <button className="button" >MERN Stack Developer</button>
                    <br />
                    <h4 className="gray" style={{fontSize:"25   px"}}>I design and code beautiful simple things, and I love what I do.</h4>
                    <br />
                    <a className="green" href="/sammyak.deosale.1@gmail.com">Let's chat!</a>
                    <br />
                </div>
                <Image src="https://w7.pngwing.com/pngs/181/762/png-transparent-programmer-computer-programming-software-programming-s-computer-computer-program-programming-language.png" width={463} height={513} alt="blaiti"  />
            </div>
            
        </header>
    )
}