export const initialState = {
  0: {
    flip: false,
    selected: null,
  },
  1: {
    flip: false,
    selected: null,
  },
  2: {
    flip: false,
    selected: null,
  },
  3: {
    flip: false,
    selected: null,
  },
  4: {
    flip: false,
    selected: null,
  },
  5: {
    flip: false,
    selected: null,
  },
  6: {
    flip: false,
    selected: null,
  },
  7: {
    flip: false,
    selected: null,
  },
  8: {
    flip: false,
    selected: null,
  },
};

export const resetState = {
  0: {
    flip: false,
    selected: null,
  },
  1: {
    flip: false,
    selected: null,
  },
  2: {
    flip: false,
    selected: null,
  },
  3: {
    flip: false,
    selected: null,
  },
  4: {
    flip: false,
    selected: null,
  },
  5: {
    flip: false,
    selected: null,
  },
  6: {
    flip: false,
    selected: null,
  },
  7: {
    flip: false,
    selected: null,
  },
  8: {
    flip: false,
    selected: null,
  },
};

export type Turn = null | "X" | "O";

export interface SquaresState {
  [index: number]: { flip: boolean; selected: Turn };
}

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
