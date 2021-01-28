import React, { FunctionComponent } from "react";
import { Button } from "./styles";

interface TogglerProps {
  toggleTheme: () => void;
}

export const Toggler: FunctionComponent<TogglerProps> = ({ toggleTheme }) => (
  <Button onClick={toggleTheme}>Switch Theme</Button>
);
