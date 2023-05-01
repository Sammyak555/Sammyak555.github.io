import React from "react";
import {
  PlaygroundProjectContainer,
  StyledPlayground,
} from "../styles/Playground.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import PlaygroundProjectComponent from "./PlaygroundProject";
import { projectsData } from "./data";
import GitHubCalendar from "react-github-calendar";

const Playground = () => {
  return (
    <StyledPlayground id="playground">
      <SectionHeading>
        <SectionTitle number="03">GitHub</SectionTitle>
      </SectionHeading>
      <div className="react-activity-calendar">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Sammyak555"
          blockSize={15}
          fontSize={15}
          colorScheme='light'
        >
          {/* <Tooltips delayShow={20} html /> */}
        </GitHubCalendar>
      </div>
    </StyledPlayground>
  );
};

export default Playground;
