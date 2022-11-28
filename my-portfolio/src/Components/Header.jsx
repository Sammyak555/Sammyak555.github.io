import { background } from "@chakra-ui/react";
import React from "react";



export default function Header() {
    return (
        <header>
            {/* <NavBar /> */}
            <div className="header flex light-bg">
                <div>
                    <button style={{backgroundColor:"green"}}>MERN Stack Developer</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="sammyak.deosale.1@gmail.com">Let&#39;s chat!</a>
                </div>
                
            </div>
        </header>
    )
}