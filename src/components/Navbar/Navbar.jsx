import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";

const LogoContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
});

const IconContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
});

const ToolbarContainer = styled("div")({
  justifyContent: "space-between",
  display: "flex",
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarContainer>
          <LogoContainer
            sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}
          >
            <Typography variant="h6">MUI</Typography>
          </LogoContainer>
          <IconContainer
            sx={{ display: { xs: "block", sm: "none" }, flexGrow: 1 }}
          >
            <MenuIcon />
          </IconContainer>
        </ToolbarContainer>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar
          sx={{
            bgcolor: "white",
            ml: 2,
            color: "black",
            width: 40,
            height: 40,
          }}
        >
          BB
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
