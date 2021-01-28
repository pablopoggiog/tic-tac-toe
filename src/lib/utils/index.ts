import { SquaresState } from "..";

export const checkWinner = (squares: SquaresState) => {
  if (
    squares[0].selected &&
    squares[0].selected === squares[1].selected &&
    squares[1].selected === squares[2].selected
  )
    return squares[0].selected;
  else if (
    squares[3].selected &&
    squares[3].selected === squares[4].selected &&
    squares[4].selected === squares[5].selected
  )
    return squares[3].selected;
  else if (
    squares[6].selected &&
    squares[6].selected === squares[7].selected &&
    squares[7].selected === squares[8].selected
  )
    return squares[6].selected;
  else if (
    squares[0].selected &&
    squares[0].selected === squares[3].selected &&
    squares[3].selected === squares[6].selected
  )
    return squares[0].selected;
  else if (
    squares[1].selected &&
    squares[1].selected === squares[4].selected &&
    squares[4].selected === squares[7].selected
  )
    return squares[1].selected;
  else if (
    squares[2].selected &&
    squares[2].selected === squares[5].selected &&
    squares[5].selected === squares[8].selected
  )
    return squares[2].selected;
  else if (
    squares[0].selected &&
    squares[0].selected === squares[4].selected &&
    squares[4].selected === squares[8].selected
  )
    return squares[0].selected;
  else if (
    squares[2].selected &&
    squares[2].selected === squares[4].selected &&
    squares[4].selected === squares[6].selected
  )
    return squares[2].selected;
};
