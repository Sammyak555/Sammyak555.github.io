import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
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
            <TechnologyIcon
            className="skills-card-img skills-card-name"
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
