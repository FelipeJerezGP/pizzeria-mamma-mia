import * as React from "react";
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

export default function CardPizza({ img, name, price, ingredients }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardMedia component="img" alt="green iguana" height="200" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {name}
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
            {ingredients}
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
          Precio: {funFormattedPrice(price)}
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
          <Button size="small" variant="outlined" endIcon={<VisibilityIcon />}>
            Ver más
          </Button>
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
}
