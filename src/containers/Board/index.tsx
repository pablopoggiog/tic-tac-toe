import React, { FunctionComponent } from "react";
import { Container, InnerContainer, Square } from "./styles";
import { squaresType } from "src/lib";

interface BoardProps {
  handleClick: (index: number) => void;
  squares: squaresType;
  disabled: boolean;
}

export const Board: FunctionComponent<BoardProps> = ({
  handleClick,
  squares,
  disabled,
}) => (
  <>
    <Container>
      <InnerContainer>
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Square
              key={index}
              onClick={() => handleClick(index)}
              flip={squares[index].flip}
              disabled={disabled}
            >
              <p>{squares[index].selected}</p>
            </Square>
          ))}
      </InnerContainer>
    </Container>
  </>
);
