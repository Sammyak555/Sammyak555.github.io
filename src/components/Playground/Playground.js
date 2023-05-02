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
import "./playground.css"

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
      <div className="statisticsbox">
        <div className="state1" >
          <div className="state1a">
          <a href="https://github.com/Sammyak555" >
            <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=Sammyak555&theme=radical&theme=sea&border_radius=10.2&date_format=j%20M%5B%20Y%5D" alt="" />
          </a>
          </div>
        </div>
        <div className="state2">
          <div className="state2a">
          <a href="https://github.com/Sammyak555">
            <img
            id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sammyak555&theme=default&show_icons=true&border_radius=10.2&date_format=j%20M%5B%20Y%5D"
              alt="err"  //launguages
            />
          </a>
          </div>
          <div className="state2b">
          <a href="https://github.com/Sammyak555">
            <img
            id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Sammyak555&count_private=true&theme=sea&show_icons=true&border_radius=10.2&date_format=j%20M%5B%20Y%5D"
              alt="err" //stats
            />
          </a>
          </div>
        </div>


      </div>
    </StyledPlayground>
  );
};

export default Playground;
