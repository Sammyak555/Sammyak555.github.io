import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/myimage.png";

const About = () => {
  return (
    <StyledAbout id="about" className="about section">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="01">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage className="home-img" src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph >
            My name is Sammyak R. Deosale, currently pursuing full stack web development in Masai School, Bangalore. I
            am a passionate full stack developer based in Pune.
          </StyledParagraph>
          <StyledParagraph id="user-detail-intro">
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, React JS, Node JS, Redux, Express JS,
            MongoDB, GitHub and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
