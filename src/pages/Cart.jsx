import Grid from "@mui/material/Grid2";
import { pizzaCart } from "../assets/data/pizzas";
import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import funFormattedPrice from "../utils/funFormattedPrice";

const PizzaCart = () => {
  const [pizzas, setPizzas] = useState(pizzaCart);
  const total = pizzas.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );

  const updateQuantity = (id, change) => {
    setPizzas(
      (prevPizzas) =>
        prevPizzas
          .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count + change } : pizza
          )
          .filter((pizza) => pizza.count > 0) // ¡Elimina si count <= 0!
    );
  };

  const removePizza = (id) => {
    setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza.id !== id));
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        🍕 Detalles del pedido:
      </Typography>

      <List>
        {pizzas.map((pizza) => (
          <React.Fragment key={pizza.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  src={pizza.img}
                  alt={pizza.name}
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {pizza.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    ${pizza.price.toLocaleString("es-CL")}
                  </Typography>
                }
              />

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => updateQuantity(pizza.id, -1)}
                  color="primary"
                  size="small"
                >
                  <Remove />
                </IconButton>

                <Typography mx={1}>{pizza.count}</Typography>

                <IconButton
                  onClick={() => updateQuantity(pizza.id, 1)}
                  color="primary"
                  size="small"
                >
                  <Add />
                </IconButton>

                <IconButton
                  onClick={() => removePizza(pizza.id)}
                  color="error"
                  size="small"
                  sx={{ ml: 1 }}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>

      <Grid container justifyContent="flex-end" mt={3} spacing={1}>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {funFormattedPrice(total)}
          </Typography>
        </Grid>
      </Grid>

      <Box mt={3} display="flex" justifyContent="flex-start">
        <Button variant="contained" color="primary" size="large">
          Pagar
        </Button>
      </Box>
    </Paper>
  );
};

export default PizzaCart;
