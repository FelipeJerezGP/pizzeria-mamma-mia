import React, { useState, useEffect } from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { yellow } from "@mui/material/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import funFormattedPrice from "../utils/funFormattedPrice";

const Pizza = () => {
  const [currentpizza, setCurrentPizza] = useState({
    img: "",
    name: "",
    desc: "",
    ingredients: "",
    price: 0,
  });

  async function getCurrentPizza() {
    const res = await fetch("http://localhost:5001/api/pizzas/p001");
    const data = await res.json();
    setCurrentPizza(data);
  }

  useEffect(() => {
    getCurrentPizza();
  }, []);

  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={currentpizza?.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {currentpizza?.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, mb: 2 }}
        >
          {currentpizza?.desc}
        </Typography>

        <Divider
          sx={{ borderColor: "darkgrey", width: "100%", mt: 2, mb: 2 }}
        />

        <Box>
          <Typography gutterBottom variant="subtitle1" align="center">
            Ingredientes
          </Typography>

          <Typography gutterBottom variant="subtitle2" align="center">
            <LocalPizzaIcon sx={{ color: yellow[500] }} />
            {currentpizza.ingredients}
          </Typography>
        </Box>

        <Divider
          sx={{ borderColor: "darkgrey", width: "100%", mt: 2, mb: 2 }}
        />

        <Typography
          variant="h5"
          sx={{ color: "text.secondary" }}
          align="center"
        >
          Precio: {funFormattedPrice(currentpizza.price)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "black" }}
            endIcon={<ShoppingCartOutlinedIcon />}
          >
            Añadir
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Pizza;
