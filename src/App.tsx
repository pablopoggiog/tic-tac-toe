import React, { useState, FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { Game } from "src/components";
import { ThemeType } from "src/lib";
import { lightTheme, darkTheme } from "src/theme";

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
