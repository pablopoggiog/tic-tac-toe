import React, { FunctionComponent } from "react";
import { Turn } from "src/lib";
import { Container, Icon } from "./styles";

interface AnimationProps {
  animation: string;
  winner: Turn;
}

export const Animation: FunctionComponent<AnimationProps> = ({
  animation,
  winner,
}) => {
  return (
    <Container active={!!animation}>
      <Icon>🎈</Icon>
      {animation === "winner" ? (
        <p> PLAYER {winner} WON </p>
      ) : animation === "tie" ? (
        <p> GAME TIED! </p>
      ) : (
        <p> LET'S PLAY! </p>
      )}
      <Icon>🥳</Icon>
    </Container>
  );
};
