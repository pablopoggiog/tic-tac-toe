import React, { FunctionComponent } from "react";
import { useGame, useBot } from "src/hooks";
import { Board, Toggler, SocialMedia, Animation } from "..";
import { Container, Button } from "./styles";

interface GameProps {
  toggleTheme: () => void;
}

export const Game: FunctionComponent<GameProps> = ({ toggleTheme }) => {
  const {
    animation,
    winner,
    squares,
    handleClick,
    resetGame,
    turn,
  } = useGame();
  useBot(squares, turn, handleClick);

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
