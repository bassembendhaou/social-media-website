import React from "react";
import Box from "@mui/system/Box";

export default function Rightbar() {
  return (
    <Box
      flex={2}
      bgcolor="gray"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}
