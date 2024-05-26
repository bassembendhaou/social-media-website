import Box from "@mui/system/Box";
import React from "react";

export default function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}></Box>
  );
}
