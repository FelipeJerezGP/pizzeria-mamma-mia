import { Button, Typography, Box } from "@mui/material";

function Profile() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Perfil de Usuario
      </Typography>
      <Typography variant="body1" paragraph>
        Email: usuario@ejemplo.com
      </Typography>
      <Button variant="contained" color="error">
        Cerrar sesión
      </Button>
    </Box>
  );
}

export default Profile;
