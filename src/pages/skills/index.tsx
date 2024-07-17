import { FooterConteiner, SkillBox, SkillContainer } from "./styles";
import { skillsItem } from "./data";

export function Skills() {
  return (
    <SkillContainer id="preços">
      <h2>Tabelas de Preços</h2>
      {skillsItem.map((skill) => (
        <SkillBox key={skill.id}>
          <div>
            <h3>{skill.name}</h3>
            <p>Preço: R$ {skill.price}</p>
          </div>
        </SkillBox>
      ))}
      <FooterConteiner>
        ESO corporation. All rights reserved © 2024.
      </FooterConteiner>
    </SkillContainer>
  );
}
