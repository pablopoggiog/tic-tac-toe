export type Turn = null | "X" | "O";

export interface SquaresState {
  [index: number]: { flip: boolean; selected: Turn };
}

export type ThemeType = "light" | "dark";
