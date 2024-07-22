import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  div {
    display: flex;
    width: 20rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    a {
      img {
        height: 6.3rem;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 720px) {
    div {
      width: 100%;
      justify-content: center;
    }
  }

  nav {
    display: flex;
    gap: 1rem;
    width: 50%;
    justify-content: space-around;

    @media (max-width: 720px) {
      justify-content: center;
      width: 100%;
    }

    a {
      width: 6rem;
      height: 3rem;
      margin-top: 2rem;
      gap: 5px;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      border-top: 3px solid transparent;
      color: ${(props) => props.theme["gold-500"]};
      border-bottom: 3px solid ${(props) => props.theme["gray-300"]};

      span {
        color: ${(props) => props.theme["gold-300"]};
        font-weight: 600;
      }

      &:hover {
        border-radius: 15px;
      }

      @media (max-width: 720px) {
        &:hover {
          border-radius: 0;
        }
      }

      &.active {
        span {
          color: ${(props) => props.theme["gray-100"]};
        }
        color: ${(props) => props.theme["gold-500"]};
        border-bottom: 3px solid ${(props) => props.theme["gold-500"]};
        border-radius: 15px;
      }
    }
  }
`;
