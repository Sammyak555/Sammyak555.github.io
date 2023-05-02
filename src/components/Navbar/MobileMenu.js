import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../styles/MobileMenu.styled";
import sammyak from "../fw19_1004-Sammyak-Deosale-Resume.pdf"
import {
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import downloadIcon from "../../assets/icons/download-icon.svg";

const MobileMenu = ({ isOpen, toggle }) => {

  const onButtonClick = () => {
    window.open('https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing')
   
  }

  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseText>Close</CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Projects
        </MobileMenuLink>
        <MobileMenuLink to="skills" onClick={toggle}>
          Skills
        </MobileMenuLink>
        <MobileMenuLink to="footer" onClick={toggle}>
          Contact
        </MobileMenuLink>
        <MobileMenuLink>
        <Resume>
            <ResumeLink
               href={sammyak}
              //  icon={downloadIcon}
               download="Sammyak-Deosale-Resume"
               target={'_blank'}
               onClick={onButtonClick}
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </MobileMenuLink>
        <MobileButton
          href="mailto:sammyak.deosale.1@gmail.com"
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
        </MobileButton>
      </MobileMenuList>
      
    </MobileMenuContainer>
  );
};

export default MobileMenu;
