import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import Grid from "@mui/material/Grid2";

const Home = () => {
  const [arrayPizzas, setArrayPizzas] = useState([]);

  async function getArrayPizzas() {
    const res = await fetch("http://localhost:5001/api/pizzas");
    const data = await res.json();
    setArrayPizzas(data);
  }

  useEffect(() => {
    getArrayPizzas();
  }, []);

  return (
    <>
      <Header />

      <Grid
        container
        spacing={3}
        alignContent={"center"}
        justifyContent={"center"}
      >
        {arrayPizzas.map((pizza, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={pizza.id}>
            <CardPizza
              img={pizza.img}
              name={pizza.name}
              description={pizza.desc}
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
