import React from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import Grid from "@mui/material/Grid2";
import { pizzas } from "../assets/data/pizzas";

const Home = () => {
  return (
    <>
      <Header />

      <Grid
        container
        spacing={3}
        alignContent={"center"}
        justifyContent={"center"}
      >
        {pizzas.map((pizza, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={pizza.id}>
            <CardPizza
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
