import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { BarraPesquisa } from '../components/BarraPesquisa'; 
import { CartaoPokemon } from '../components/CartoesPokemon'; 


export const Home = () => {
        const [pokemons, setPokemons] = useState([]);
    useEffect(() =>{
        pegarPokemons();

    }, []);
    const pegarPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }


  return (
    <div> 
      <BarraPesquisa/>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
            {pokemons.map((pokemon) =>
                <Grid item xs={3}>
                    <CartaoPokemon/>
                </Grid>
            )}
          
          <Grid item xs={3}>
            <CartaoPokemon/>
          </Grid>
          <Grid item xs={3}>
            <CartaoPokemon/>
          </Grid>
          <Grid item xs={3}>
            <CartaoPokemon/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
