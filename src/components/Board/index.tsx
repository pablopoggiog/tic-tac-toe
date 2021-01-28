import React, { FunctionComponent } from "react";
import { Container, InnerContainer, Square } from "./styles";
import { SquaresState } from "../../lib";

interface BoardProps {
  handleClick: (index: number) => void;
  squares: SquaresState;
}

export const Board: FunctionComponent<BoardProps> = ({
  handleClick,
  squares,
}) => {
  return (
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
              >
                <p>{squares[index].selected}</p>
              </Square>
            ))}
        </InnerContainer>
      </Container>
    </>
  );
};
