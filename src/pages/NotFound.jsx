import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

function NotFound() {
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" gutterBottom>
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1" paragraph>
        La página que buscas no existe.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Volver al inicio
      </Button>
    </Box>
  );
}

export default NotFound;
