import styled from "styled-components";

export const SkillContainer = styled.main`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 1rem;
  margin-bottom: 1rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    width: max-content;
    background: linear-gradient(
      60deg,
      ${(props) => props.theme["gold-500"]} 0%,
      ${(props) => props.theme["white"]} 80%
    );
    -webkit-text-fill-color: transparent;
    background-clip: unset;
    -webkit-background-clip: text;
  }
`;

export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  min-height: 2rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.5rem;

  background: linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 40%,
        ${(props) => props.theme["gray-800"]} 100%
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 35%,
        ${(props) => props.theme["gold-700"]} 100%
      )
      border-box;

  h3 {
    text-align: left;
    color: ${(props) => props.theme["gray-100"]};
  }
  p {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const FooterConteiner = styled.footer`
  padding: 5rem;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 8px;
  }
`;
