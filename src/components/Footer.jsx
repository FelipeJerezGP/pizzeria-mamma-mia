import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body1">
        © 2025 Pizzería Mamma Mia! - Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
