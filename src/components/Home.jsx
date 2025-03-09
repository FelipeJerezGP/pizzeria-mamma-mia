import React from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import Champinones from "../assets/image/champinones-tocino.jpg";
import Pepperoni from "../assets/image/pepperoni.jpg";
import Vegetariana from "../assets/image/Vegetariana.jpeg";
import Grid from "@mui/material/Grid2";

const Home = () => {
  const dataPizzas = [
    {
      img: Champinones,
      name: "Pizza Champiñon tocino",
      price: 12990,
      ingredients: "Mozarella, Champiñones, Tocino",
    },
    {
      img: Pepperoni,
      name: "Pizza Pepperoni",
      price: 9990,
      ingredients: "Mozarella, Pepperoni",
    },
    {
      img: Vegetariana,
      name: "Pizza Vegetariana",
      price: 10990,
      ingredients: "Mozarella, Pimentones, Aceitunas",
    },
  ];

  return (
    <>
      <Header />

      <Grid
        container
        spacing={3}
        alignContent={"center"}
        justifyContent={"center"}
      >
        {dataPizzas.map((pizza, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
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
