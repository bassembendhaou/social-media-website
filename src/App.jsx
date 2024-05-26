import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./colorModeContext";
import { Box } from "@mui/material";

const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        console.log("hello");
      },
    }),
    []
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "hsla(234, 100%, 94%, 1)",
            },
          }
        : {
            primary: {
              main: "#34495E",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Feed />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
