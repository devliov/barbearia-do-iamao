import { styled } from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  align-items: flex-end;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    margin-top: 2rem;
    align-items: center;
    height: max-content;
    align-items: center;
  }

  background: linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 40%,
        ${(props) => props.theme["gray-800"]} 100%
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 35%,
        ${(props) => props.theme["gold-300"]} 100%
      )
      border-box;
  border-radius: 12px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: "Baloo 2", sans-serif;

    h2 {
      font-size: 2.5rem;
      width: max-content;
      background: linear-gradient(
        60deg,
        ${(props) => props.theme["gold-300"]} 0%,
        ${(props) => props.theme["white"]} 80%
      );
      -webkit-text-fill-color: transparent;
      background-clip: unset;
      -webkit-background-clip: text;
    }

    h3 {
      color: ${(props) => props.theme["gray-400"]};
    }

    a {
      display: flex;
      padding: 0.5rem;
      gap: 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme["green-300"]};

      span {
        display: flex;
        color: ${(props) => props.theme["white"]};
      }

      p {
        align-items: center;
        display: flex;
        color: ${(props) => props.theme["white"]};
        font-weight: bold;
      }
    }

    @media (max-width: 720px) {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1rem;
      }
      p {
        font-size: 12px;
      }
    }

    @media (max-width: 475px) {
      h2 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.6rem;
      }
    }
  }
`;

export const SocialMediaContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const BoxImage = styled.section`
  /* width: 300px; */
  height: 300px;
  @media (max-width: 720px) {
    width: 225px;
    height: 225px;
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
  }
  img {
    /* width: 450px; */
    height: 300px;
    border-bottom-left-radius: 11px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 11px;
    margin-right: 2px;
    filter: brightness(0.81);

    @media (max-width: 720px) {
      width: 225px;
      height: 225px;
    }

    @media (max-width: 425px) {
      width: 150px;
      height: 150px;
    }
  }
`;

export const LocationContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  a {
    text-decoration: none;
    font-weight: 600;
    color: white;
    text-align: center;
    padding: 0.5rem;
    background-color: ${(props) => props.theme["gold-300"]};
    border-radius: 0.5rem;

    :hover {
      a {
        background-color: ${(props) => props.theme["gold-700"]};
      }
    }
  }
`;
