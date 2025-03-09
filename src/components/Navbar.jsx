import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import funFormattedPrice from "../utils/funFormattedPrice";

const Navbar = () => {
  const total = 25000;
  const formattedTotal = funFormattedPrice(total);
  const token = false;

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Pizzería Mamma Mia!
          </Typography>
          <Button
            color="inherit"
            sx={{ marginLeft: 2 }}
            variant="outlined"
            startIcon={<LocalPizzaIcon />}
          >
            Home
          </Button>
          {token ? (
            <>
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
                variant="outlined"
                startIcon={<LockOpenOutlinedIcon />}
              >
                Profile
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
                variant="outlined"
                startIcon={<LockOutlinedIcon />}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
                variant="outlined"
                startIcon={<VpnKeyOutlinedIcon />}
              >
                Login
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
                variant="outlined"
                startIcon={<VpnKeyOutlinedIcon />}
              >
                Register
              </Button>
            </>
          )}
        </Box>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          {formattedTotal}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
