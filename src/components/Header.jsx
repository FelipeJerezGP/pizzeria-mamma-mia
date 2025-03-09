import React from "react";
import HeaderImage from "../assets/image/Header.jpg";
import { Box, Typography, Divider } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "350px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "white",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" component="h1">
          ¡Pizzeria Mamma Mia!
        </Typography>
        <Typography variant="body1" component="p">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </Typography>
        <Divider sx={{ borderColor: "white", width: "50%", mt: 2, mb: 2 }} />
      </Box>
    </Box>
  );
};

export default Header;
