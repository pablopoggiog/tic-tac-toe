import { useState } from "react";
import { squaresType, Turn, initialState, checkWinner } from "src/lib";

export const useGame = () => {
  const [turn, setTurn] = useState<number>(0);

  const [winner, setWinner] = useState<Turn>(null);

  const [animation, setAnimation] = useState<string>("");

  const [squares, setSquares] = useState<squaresType>(
    JSON.parse(JSON.stringify(initialState)) // i have to use these 2 JSON methods to pass a full new objet as initial state,
  ); // otherwise b/c of the nesting levels it'll have weird behaviours mutating initialState const value during the app usage

  const playSquare = (index: number) => {
    // checks before that the square isnt used yet
    if (!squares[index].selected) {
      setTurn(turn + 1);
      // creates a new instance
      const newSquares = [...squares];

      newSquares[index].flip = true;
      // depending on the turn, the square will draw and X or an O
      newSquares[index].selected = turn % 2 ? "X" : "O";

      setSquares([...newSquares]);

      setTimeout(() => {
        newSquares[index].flip = false;

        setSquares([...newSquares]);
      }, 2000);
    }
  };

  const handleClick = (index: number) => {
    // if there isnt a winner yet, flips a square
    !winner && playSquare(index);

    const someoneWon = checkWinner(squares);

    // checks for a winner
    if (someoneWon) {
      setWinner(someoneWon);

      setAnimation("winner");

      setTimeout(() => {
        setAnimation("");
      }, 4500);
    }
    // checks if there is a tied game
    else if (turn === 9) {
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

  return {
    animation,
    winner,
    squares,
    handleClick,
    resetGame,
    playSquare,
    turn,
  };
};
