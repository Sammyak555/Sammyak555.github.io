import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavLogo,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
import downloadIcon from "../../assets/icons/download-icon.svg";
import sammyak from "../fw19_1004-Sammyak-Deosale-Resume.pdf"

import {
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import logo from "../../assets/logo.svg";
import { animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 510) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // mobile toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onButtonClick = () => {
    window.open('https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing')
   
  }

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""} id="nav-menu">
      <div>
        <NavLogo to="/" onClick={toTop} src={logo} alt="logo" />
      </div>
      <NavMenuList>
        <NavList>
          <StyledNavLinks
          className="nav-link home"
            to="home"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Home
          </StyledNavLinks>
        </NavList>
        
        <NavList>
          <StyledNavLinks
            to="about"
            className="nav-link about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            About
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="projects"
            className="nav-link projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Projects
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
           className="nav-link skills"
            to="skills"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Skills
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="contact"
            className="nav-link contact"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Contact
          </StyledNavLinks>
        </NavList>
    
        <NavList>
        <Resume >
           <a>
           <ResumeLink
             id="resume-link-1"
            className="nav-link resume"
    
            style={{border:"1.5px solid orange", padding:"9px"}}
               href={sammyak}
               icon={downloadIcon}
               download="Sammyak-Deosale-Resume"
               target={'_blank'}
               onClick={onButtonClick}
            >
              Download Resume
            </ResumeLink>
           </a>
          </Resume>
        </NavList>
        
      </NavMenuList>
      <StyledCTA
        href="mailto:sammyak.deosale.1@gmail.com "
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
            get in touch
          </span>
        </span>
      </StyledCTA>

      <Menu onClick={toggle}>
        <Line width="1.5rem" />
        <Line />
        <Line width="1.5rem" ml="0.5rem" />
      </Menu>

      <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
