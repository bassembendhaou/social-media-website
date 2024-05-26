import React from "react";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { Avatar, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Box from "@mui/material/Box";
import { ColorModeContext } from "../../colorModeContext";

const Navbar = () => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      style={{
        background: theme.palette.primary.main,
      }}
    >
      <Container>
        <Toolbar>
          <IconButton>
            <Avatar
              alt="Bassem"
              src="src/assets/bassem.jpg"
              sx={{ width: 50, height: 50, mr: 20 }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
