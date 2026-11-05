import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { CartaoPokemon } from '../components/CartoesPokemon';





export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    pegarPokemons();




  }, []);
  const pegarPokemons = () => {

    var endpoints = []
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }


    console.log(endpoints)

    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));



    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }


  return (
    <div style={{paddingTop: '90px'}}>
      <BarraPesquisa />

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) =>
            <Grid item xs={3} key={key}>
              <CartaoPokemon name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};
