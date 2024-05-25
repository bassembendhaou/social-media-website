import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Stack } from "@mui/material";
import Rightbar from "./components/Rightbar/Rightbar";
import Box from "@mui/system/Box";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Stack
        direction="row"
        spacing={{ xs: 0, sm: 2 }}
        justifyContent="space-between"
        mt={2}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
