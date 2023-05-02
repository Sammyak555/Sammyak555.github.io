import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import downloadIcon from "../../assets/icons/download-icon.svg";
import {
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import sammyak from "../fw19_1004-Sammyak-Deosale-Resume.pdf"

const Home = () => {
  let today = new Date(),
    hour = today.getHours();
    const onButtonClick = () => {
      window.open('https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing')
     
    }
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name id="user-detail-name">Sammyak Deosale</Name>
        <Title>Full Stack Developer</Title>
        <p>
          I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> websites.
        </p>
        <StyledButtonsContainer>
          
          <Resume id="resume-button-2">
            <ResumeLink
              id="resume-button-2"
               href={sammyak}
               icon={downloadIcon}
               download="Sammyak-Deosale-Resume"
               target={'_blank'}
               onClick={onButtonClick}
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
          id="contact-email"
            href="mailto:sammyak.deosale.1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
           id="contact-github"
            href="https://github.com/Sammyak555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
          id="contact-linkedin"
            href="https://www.linkedin.com/in/sammyak-deosale-1b9abb229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
