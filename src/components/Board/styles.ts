import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  width: 90%;
  height: 90vw;
  justify-self: center;
  padding-top: 1em;

  @media (min-aspect-ratio: 3/4) {
    width: 60vh;
    height: 60vh;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

interface SquareProps {
  flip: boolean;
}

export const Square = styled.div<SquareProps>`
  display: flex;
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  animation: ${({ flip }) => (flip ? css`2s ${rotate} 1` : "")};
  border-radius: 1em;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 40px;
    margin: 0;
    font-weight: 600;
    color: white;
  }
`;
