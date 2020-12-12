import React, { FunctionComponent, useState } from "react";
import { Container, InnerContainer, Square } from "./styles";

export const Board: FunctionComponent = () => {
  const [turn, setTurn] = useState<boolean>(false);

  const takeATurn = () => {
    setTurn(true);
    setTimeout(() => setTurn(false), 2000);
  };

  return (
    <Container>
      <InnerContainer>
        {Array(9)
          .fill(null)
          .map((_) => (
            <Square onClick={takeATurn} turn={turn} />
          ))}
      </InnerContainer>
    </Container>
  );
};
