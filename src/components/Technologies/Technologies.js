import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologiesWrapper,
  Technologiesnames,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData } from "./icons";

const Technologies = () => {
  return (
    <TechnologiesContainer id="skills">
      <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <div className="skills-card" key={iconData.id}>
              <TechnologiesWrapper>
          <TechnologyIcon
            className="skills-card-img"
            src={iconData.icon}
            alt={iconData.name}
            title={iconData.name}
            {...iconData}
            />
          <Technologiesnames className="skills-card-name">{iconData.name}</Technologiesnames>
            </TechnologiesWrapper>
        </div>
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
