import React, { FunctionComponent } from "react";
import { Board, Toggler, SocialMedia, Animation } from "..";
import { useGame } from "../../hooks";
import { Container, Button } from "./styles";

interface GameProps {
  toggleTheme: () => void;
}

export const Game: FunctionComponent<GameProps> = ({ toggleTheme }) => {
  const { animation, winner, squares, handleClick, resetGame } = useGame();

  return (
    <Container>
      <Toggler toggleTheme={toggleTheme} />
      <Animation animation={animation} winner={winner} />
      <Board handleClick={handleClick} disabled={!!winner} squares={squares} />

      <Button onClick={resetGame}>New Game</Button>

      <SocialMedia />
    </Container>
  );
};
