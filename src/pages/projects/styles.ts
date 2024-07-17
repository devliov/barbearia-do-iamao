import styled from "styled-components";

export const ProjectContainer = styled.main`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 1rem;
  margin-bottom: 10rem;

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

export const ProjectItem = styled.div`
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
    color: ${(props) => props.theme["gray-100"]};
  }
  p {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const ImageSlider = styled.div`
  width: 100%;
  overflow: scroll;
  position: relative;
  border-radius: 0.5rem;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};

  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;

  img {
    margin: 5px solid #000;
    width: 150px;
    height: 225px;
    cursor: pointer;
  }
`;
