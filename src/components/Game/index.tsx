import React, { useState, FunctionComponent } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { Board, Toggler } from "..";
import { SquaresState, Turn, initialState, checkWinner } from "../../lib";
import {
  Container,
  SocialMediaContainer,
  Button,
  Animation,
  Icon,
} from "./styles";

interface GameProps {
  toggleTheme: () => void;
}

export const Game: FunctionComponent<GameProps> = ({ toggleTheme }) => {
  const [turn, setTurn] = useState<number>(0);

  const [winner, setWinner] = useState<Turn>(null);

  const [animation, setAnimation] = useState<string>("");

  const [squares, setSquares] = useState<SquaresState>(
    JSON.parse(JSON.stringify(initialState)) // i have to use these 2 JSON methods to pass a full new objet as initial state,
  ); // otherwise because of the nesting levels it'll have weird behaviours muting initialState const value during the app usage

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
    !winner && playSquare(index);

    const someoneWon = checkWinner(squares);

    if (someoneWon) {
      setWinner(someoneWon);

      setAnimation("winner");

      setTimeout(() => {
        setAnimation("");
      }, 4500);
    }

    if (turn === 9) {
      setAnimation("tie");

      setTimeout(() => {
        setAnimation("");
      }, 4500);
    }
  };

  const resetGame = () => {
    setAnimation("reset");

    setTimeout(() => {
      setAnimation("");
    }, 4500);

    setWinner(null);

    setTurn(0);

    setTimeout(() => {
      setSquares(JSON.parse(JSON.stringify(initialState)));
    }, 2200);
  };

  return (
    <Container>
      <Toggler toggleTheme={toggleTheme} />
      <Animation active={!!animation}>
        <Icon>🎈</Icon>
        {animation === "winner" ? (
          <p> PLAYER {winner} WON </p>
        ) : animation === "tie" ? (
          <p> GAME TIED! </p>
        ) : (
          <p> LET'S PLAY! </p>
        )}
        <Icon>🥳</Icon>
      </Animation>
      <Board handleClick={handleClick} disabled={!!winner} squares={squares} />

      <Button onClick={resetGame}>New Game</Button>

      <SocialMediaContainer>
        <FacebookShareButton
          url="https://pablopoggiog.github.io/tic-tac-toe"
          quote="This is a pretty good game, check it out!"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url="https://pablopoggiog.github.io/tic-tac-toe"
          title="This is a pretty good game, check it out!"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </SocialMediaContainer>
    </Container>
  );
};
