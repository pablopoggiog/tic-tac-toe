import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { Board } from "..";
import { SquaresState, Turn, initialState, checkWinner } from "../../utils";
import { Container, SocialMediaContainer, Button, Animation } from "./styles";

export const Game = () => {
  const [turn, setTurn] = useState<number>(0);
  const [winner, setWinner] = useState<Turn>(null);
  const [animation, setAnimation] = useState<string | null>(null);
  const [squares, setSquares] = useState<SquaresState>(
    JSON.parse(JSON.stringify(initialState)) // i have to use these 2 JSON methods to pass a full new objet as initial state,
  ); // otherwise because of the nesting levels it'll have weird behaviours muting initialState const value during the app usage

  useEffect(() => {
    if (turn === 9) {
      setAnimation("tie");
      setTimeout(() => {
        setAnimation(null);
      }, 4500);
    }
  }, [turn]);

  const resetGame = () => {
    setAnimation("reset");
    setTimeout(() => {
      setAnimation(null);
    }, 4500);
    setWinner(null);
    setTurn(0);
    setTimeout(() => {
      setSquares(JSON.parse(JSON.stringify(initialState)));
    }, 2200);
  };

  const playSquare = (index: number) => {
    if (!squares[index].selected) {
      setTurn(turn + 1);
      const newSquares = { ...squares };
      newSquares[index].flip = true;
      newSquares[index].selected = turn % 2 ? "X" : "O";
      setSquares({ ...newSquares });
      setTimeout(() => {
        newSquares[index].flip = false;
        setSquares({ ...newSquares });
      }, 2000);
    }
  };

  const handleClick = (index: number) => {
    const someoneWon = checkWinner(squares);
    if (someoneWon && !winner) {
      setWinner(someoneWon);
      setAnimation("winner");
      setTimeout(() => {
        setAnimation(null);
      }, 4500);
    }

    !winner && playSquare(index);
  };

  return (
    <Container>
      <Animation active={!!animation}>
        <span>🎈</span>
        {animation === "winner" ? (
          <p> PLAYER {winner} WON </p>
        ) : animation === "tie" ? (
          <p> GAME TIED! </p>
        ) : (
          <p> LET'S PLAY! </p>
        )}
        <span>🥳</span>
      </Animation>
      <Board handleClick={handleClick} squares={squares} />

      <Button onClick={resetGame}>New Game</Button>

      {/* in this 2 buttons, the idea passing as url the actual url of the deployed app, once that's done (instead of the google placeholder) */}
      <SocialMediaContainer>
        {/*
            // @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
        <FacebookShareButton
          url="www.google.com"
          quote="This is a pretty good game, check it out!"
        >
          {/*
              // @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        {/*
            // @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
        <TwitterShareButton
          url="www.google.com"
          title="This is a pretty good game, check it out!"
        >
          {/*
              // @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </SocialMediaContainer>
    </Container>
  );
};
