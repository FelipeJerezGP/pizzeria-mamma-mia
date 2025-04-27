import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Cart from "./components/Cart";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 8,
          mb: 4,
        }}
      >
        {/* <Cart /> */}
        {/* <Home /> */}
        <Pizza />
        {/* <Register /> */}
        {/* <Login /> */}
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
