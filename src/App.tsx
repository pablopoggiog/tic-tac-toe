import React, { useState, FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { Game } from "./components";
import { ThemeType } from "./lib";
import { lightTheme, darkTheme } from "./theme";

const App: FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const themeToggler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Game toggleTheme={themeToggler} />
    </ThemeProvider>
  );
};

export default App;
