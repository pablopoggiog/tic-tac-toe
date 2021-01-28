import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 8vh;

  @media (max-aspect-ratio: 3/4) {
    justify-content: space-evenly;
  }
`;

const popUp = keyframes`
    from {
        visibility: visible;
        opacity: 0;
        height: 100%;
        width: 100%;
    }

    to {
        visibility: visible;
        opacity: 1;
        height: 100%;
        width: 100%;
    }
}`;

export const Animation = styled.div<{ active: boolean }>`
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  animation: ${({ active }) =>
    active
      ? css`
          ${popUp} 2s ease 0s 2 alternate
        `
      : ""};
  z-index: ${({ active }) => (active ? 1 : 0)};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 40px;
    margin: 0;
    font-weight: 600;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > span {
    font-size: 28px;
    margin: 0;
    text-align: center;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  width: 30%;

  @media (min-aspect-ratio: 3/4) {
    width: 200px;
  }

  & > button:focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  padding: 1em;
  margin: 2em auto;
  background: #8e2de2;
  border-radius: 1em;
  border: none;
  font-weight: 600;
  width: 140px;
  opacity: 0.9;
  transition: 0.9s;
  color: white;

  &:hover {
    opacity: 1;
    background: #4a00e0;
  }

  &:focus {
    outline: 0;
    background: #4a00e0;
    opacity: 1;
  }
`;

export const Icon = styled.span``;
