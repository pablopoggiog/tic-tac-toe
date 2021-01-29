import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 8vh;
  background-color: ${({ theme }) => theme.background};
  transition: 1s;

  @media (max-aspect-ratio: 3/4) {
    justify-content: space-evenly;
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
