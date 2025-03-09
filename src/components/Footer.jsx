import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="white" align="center">
        ©2025-Pizzería MammaMia!-Todoslosderechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
