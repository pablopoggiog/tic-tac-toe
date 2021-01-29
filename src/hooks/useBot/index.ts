import { useEffect } from "react";
import { squaresType } from "src/lib";

export const useBot = (squares: squaresType, turn: any, handleClick: any) => {
  const chooseAnEmptySquare = () => {
    let random = Math.floor(Math.random() * 8);

    if (!squares[random].selected) handleClick(random);
    else chooseAnEmptySquare();
  };

  const play = () => setTimeout(() => chooseAnEmptySquare(), 2000);

  useEffect(() => {
    turn % 2 && turn < 9 && play();
  }, [turn]);
};
