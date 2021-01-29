import styled from "styled-components";

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
