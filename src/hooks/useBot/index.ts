import { useEffect, useCallback } from "react";
import { squaresType } from "src/lib";

export const useBot = (squares: squaresType, turn: any, handleClick: any) => {
  const chooseAnEmptySquare = useCallback(() => {
    let random = Math.floor(Math.random() * 8);

    if (!squares[random].selected) handleClick(random);
    else chooseAnEmptySquare();
  }, [handleClick, squares]);

  const play = useCallback(
    () => setTimeout(() => chooseAnEmptySquare(), 2000),
    [chooseAnEmptySquare]
  );

  useEffect(() => {
    console.log(turn);
    turn % 2 && turn < 9 && play();
  }, [turn, play]);
};
