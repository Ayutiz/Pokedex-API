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

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

  };

  const pokemonFiltro = (name) => {
    var pokemonFiltrado = []
    if(name == ""){
      pegarPokemons()
    }

    for (var i in pokemons) {
      if(pokemons[i].data.name.includes(name)) {
        pokemonFiltrado.push(pokemons[i]);
      }
    }
    setPokemons(pokemonFiltrado)
  }


  return (
    <div style={{paddingTop: '90px'}}>
      <BarraPesquisa pokemonFiltro={pokemonFiltro}/>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) =>
            <Grid item xs={12} sm={5} lg={2} key={key}>
              <CartaoPokemon name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};
