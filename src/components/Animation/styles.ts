import styled, { css, keyframes } from "styled-components";

export const Container = styled.div<{ active: boolean }>`
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

export const Icon = styled.span``;

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
