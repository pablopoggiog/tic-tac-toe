import { useState } from "react";
import { SquaresState, Turn, initialState, checkWinner } from "src/lib";

export const useGame = () => {
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

  return {
    animation,
    winner,
    squares,
    handleClick,
    resetGame,
  };
};
